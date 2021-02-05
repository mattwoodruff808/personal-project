import {connect} from 'react-redux';
import {getRecipe} from '../../../redux/recipeReducer';
import './Ingredients.css';

const Ingredients = (props) => {

    

    return (
        <section>
            <img src={props.recipe.length > 0 && props.recipe[0].recipe_pic}  
                 alt={props.recipe.length > 0 && props.recipe[0].title}/>
            <section>
                <h3>Ingredients</h3>
                <p>{props.recipe.length > 0 && props.recipe[0].measurement}</p>
                <p>{props.recipe.length > 0 && props.recipe[0].ingredient}</p>
            </section>
        </section>
    )
}

const mapStateToProps = reduxState => {
    return {
        recipe: reduxState.recipeReducer.recipe
    }
};

export default connect(mapStateToProps, {getRecipe})(Ingredients);