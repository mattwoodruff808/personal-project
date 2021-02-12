import {connect} from 'react-redux';
import {getRecipe} from '../../../redux/recipeReducer';
import './Ingredients.css';
import cupSvg from './kitchen-measuringcup.svg';

const Ingredients = (props) => {
    let filteredIngredients = props.recipe.filter((el, i) => {
        return {
            key: i,
            measurement: el.measurement,
            ingredient: el.ingredient
        }
    })

    let mappedFiltered = filteredIngredients.map((el, i) => {
        return <section key={i} className='ing-flex'>
            <img src={cupSvg} alt=''/>
            <p>{el.measurement}, {el.ingredient}</p>
        </section>
    })

    return (
        <section className='Ingredients'>
            <img src={props.recipe.length > 0 && props.recipe[0].recipe_pic}  
                 alt=''/>
            <section>
                <h3>Ingredients</h3>
                {mappedFiltered}
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