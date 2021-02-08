import axios from 'axios';
import {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {getRecipe} from '../../../redux/recipeReducer';
import './Comments.css';

const Comments = (props) => {
    const [input, setInput] = useState('');
    const [comments, setComments] = useState([]);
    const [addView, setAddView] = useState(false);

    useEffect(() => {
        getComments(props.recipe.length > 0 && props.recipe[0].recipe_id)
    }, []);

    const getComments = (recipeId) => {
        axios.get(`/api/comments/${recipeId}`)
            .then(res => {
                setComments(res.data);
            })
            .catch(err => console.log(err));
    }

    const addComment = (recipeId) => {
        const {user_id} = props.user;

        axios.post(`/api/comment/${recipeId}`, {content: input, userId: user_id})
            .then(() => {
                getComments(props.recipe.length > 0 && props.recipe[0].recipe_id);
                setInput('');
            })
            .catch(err => console.log(err));
    }

    const editComment = () => {

    }

    const deleteComment = () => {

    }

    const toggleView = () => {
        setAddView(!addView);
    }

    const handleAdd = () => {
        addComment(props.recipe.length > 0 && props.recipe[0].recipe_id);
        toggleView();
    }

    let mappedComments = comments.map((el, i) => {
        return <section key={i}>
            <aside>
                <img src={el.profile_pic} alt={el.username}/>
                <p>{el.username}</p>
            </aside>
            <main>
                <p>{el.date_created}</p>
                <p>{el.content}</p>
            </main>
        </section>
    })

    return (
        <section>
            {props.user.user_id 
                ? 
                (
                    <div>
                        <header>
                            <section>
                                <h3>Comments</h3>
                                <p>Feel free to share memories or variations of the recipe</p>
                            </section>
                            {!addView 
                                ? 
                                (
                                    <button onClick={toggleView}>Add Comment</button>
                                ) 
                                : 
                                (
                                    <section>
                                        <textarea maxLength={250}
                                                  value={input}
                                                  placeholder='Enter comment here'
                                                  onChange={(e) => setInput(e.target.value)}></textarea>
                                        <button onClick={handleAdd}>Submit</button>
                                    </section>
                                )}
                        </header>
                        <main>
                            {mappedComments}
                        </main>
                    </div>
                ) 
                : 
                (
                    <p>Please login to view Comments</p>
                )}
        </section>
    )
}

const mapStateToProps = reduxState => {
    return {
        recipe: reduxState.recipeReducer.recipe,
        user: reduxState.userReducer.user
    }
};

export default connect(mapStateToProps, {getRecipe})(Comments);