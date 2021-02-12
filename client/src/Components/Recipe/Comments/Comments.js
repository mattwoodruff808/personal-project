import axios from 'axios';
import {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {getRecipe} from '../../../redux/recipeReducer';
import './Comments.css';

const Comments = (props) => {
    const [input, setInput] = useState('');
    const [comments, setComments] = useState([]);
    const [addView, setAddView] = useState(false);
    const [editView, setEditView] = useState(false);
    const [editContent, setEditContent] = useState('');
    const [editId, setEditId] = useState(0);

    useEffect(() => {
        getComments(props.recipe.length > 0 ? props.recipe[0].recipe_id : null);
    });

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
        axios.put(`/api/comment/${editId}`, {content: editContent})
            .then(() => {
                getComments(props.recipe.length > 0 && props.recipe[0].recipe_id)
                cancelEditView();
                setEditContent('');
                setEditId(0);
            })
            .catch(err => console.log(err));
    }

    const deleteComment = () => {
        axios.delete(`/api/comment/${editId}`)
            .then(() => {
                getComments(props.recipe.length > 0 && props.recipe[0].recipe_id);
                cancelEditView();
            })
    }

    const toggleAddView = () => {
        setAddView(!addView);
    }

    const handleAdd = () => {
        addComment(props.recipe.length > 0 && props.recipe[0].recipe_id);
        toggleAddView();
    }

    const toggleEditView = (commentId, content) => {
        setEditView(!editView);
        setEditId(commentId);
        setEditContent(content);
    }

    const cancelEditView = () => {
        setEditView(!editView);
    }

    let mappedComments = comments.map((el, i) => {
        return <section key={i} className='each-comment'>
            <aside>
                <img src={el.profile_pic} alt={el.username}/>
                <p>{el.username}</p>
            </aside>
            <main>
                <div>
                    <p>{el.date_created}</p>
                    {props.user && props.user.user_id === el.user_id 
                        ? 
                        (
                            <p className='edit-btn' onClick={() => toggleEditView(el.comment_id, el.content)}>edit</p>
                        ) 
                        : null}
                </div>
                <p>{el.content}</p>
            </main>
        </section>
    })

    return (
        <section className='Comments'>
            {props.user 
                ? 
                (
                    <div>
                        <header className='comment-head'>
                            <section className='comment-text'>
                                <h3>Comments</h3>
                                <p>Feel free to share memories or variations of the recipe</p>
                            </section>
                            {!addView 
                                ? 
                                (
                                    <button className='add-btn' onClick={toggleAddView}>Add Comment</button>
                                ) 
                                : 
                                (
                                    <>
                                        <div className='add-comment'></div>
                                        <section className='add-com-container'>
                                            <h2>Add Comment</h2>
                                            <textarea maxLength={250}
                                                    value={input}
                                                    placeholder='Enter comment here'
                                                    onChange={(e) => setInput(e.target.value)}></textarea>
                                            <button onClick={handleAdd}>Submit</button>
                                            <button onClick={toggleAddView}>Cancel</button>
                                        </section>
                                    </>
                                )}
                        </header>
                        <main className='comments-main'>
                            {!comments[0] 
                                ? 
                                (
                                    <p>Be the first to add a comment!</p>
                                ) 
                                : 
                                (
                                    mappedComments
                                )}
                        </main>
                        <div>
                            {editView 
                                ? 
                                (
                                    <>
                                    <div className='edit-comment'></div>
                                    <main className='edit-com-container'>
                                        <h2>Edit Comment</h2>
                                        <textarea value={editContent}
                                                  maxLength={250}
                                                  onChange={(e) => setEditContent(e.target.value)}></textarea>
                                        <button onClick={editComment}>Submit Change</button>
                                        <button onClick={cancelEditView}>Cancel</button>
                                        <button onClick={deleteComment}>Delete Comment</button>
                                    </main>
                                    </>
                                ) 
                                : null}
                        </div>
                    </div>
                ) 
                : 
                (
                    <p>Please log-in to view Comments</p>
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