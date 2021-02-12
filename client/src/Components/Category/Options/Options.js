import {connect} from 'react-redux';
import {getRecipe} from '../../../redux/recipeReducer';
import './Options.css';

const Options = (props) => {
    const handleDirection = (recipeId) => {
        props.getRecipe(recipeId);
        props.pushFn('/recipe');
    }

    return (
        <section className='Options' onClick={() => handleDirection(props.recipeId)}>
            <img src={props.recipePic} alt={props.title}/>
            <h3>{props.title}</h3>
        </section>
    )
}

export default connect(null, {getRecipe})(Options);