import {connect} from 'react-redux';
import {getRecipe} from '../../../redux/recipeReducer';
import './Info.css';

const Info = (props) => {
    return (
        <section>
            <h3>Instructions</h3>
            <p>{props.recipe.length > 0 && props.recipe[0].instructions}</p>
            <h3>Background</h3>
            <p>{props.recipe.length > 0 && props.recipe[0].background}</p>
        </section>
    )
}

const mapStateToProps = reduxState => {
    return {
        recipe: reduxState.recipeReducer.recipe
    }
};

export default connect(mapStateToProps, {getRecipe})(Info);