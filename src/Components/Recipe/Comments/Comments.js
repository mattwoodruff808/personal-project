import {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {getRecipe} from '../../../redux/recipeReducer';
import './Comments.css';

const Comments = (props) => {
    const [input, setInput] = useState('');

    const getComments = (recipeId) => {

    }

    return (
        <section>
            <section>
                <h3>Comments</h3>
                <p>Feel free to share memories or variations of the recipe</p>
            </section>
            <button>Add Comment</button>
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