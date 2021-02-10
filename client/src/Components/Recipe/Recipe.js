import {connect} from 'react-redux';
import Ingredients from './Ingredients/Ingredients';
import Info from './Info/Info';
import Comments from './Comments/Comments';
import './Recipe.css';

const Recipe = (props) => {
    return (
        <section>
            <h1>{props.recipe.length > 0 && props.recipe[0].title}</h1>
            <p>{props.recipe.length > 0 && props.recipe[0].category}</p>
            <Ingredients />
            <Info />
            <Comments />
        </section>
    )
}

const mapStateToProps = reduxState => {
    return {
        recipe: reduxState.recipeReducer.recipe
    }
}

export default connect(mapStateToProps)(Recipe);