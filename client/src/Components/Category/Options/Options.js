import {connect} from 'react-redux';
import {getRecipe} from '../../../redux/recipeReducer';
import './Options.css';

const Options = (props) => {
    const handleDirection = (recipeId) => {
        props.getRecipe(recipeId);
        props.pushFn('/recipe');
    }

    return (
        <section className='Options'>
            <img src={props.recipePic} alt={props.title} onClick={() => handleDirection(props.recipeId)}/>
            <h3 onClick={() => handleDirection(props.recipeId)}>{props.title}</h3>
        </section>
    )
}

export default connect(null, {getRecipe})(Options);