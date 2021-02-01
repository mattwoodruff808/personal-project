import {connect} from 'react-redux';
import {getRecipe} from '../../../redux/recipeReducer';
import './Ingredients.css';

const Ingredients = (props) => {
    return (
        <section>
            Ingredients
        </section>
    )
}

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps, {getRecipe})(Ingredients);