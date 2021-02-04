import {connect} from 'react-redux';
import Ingredients from './Ingredients/Ingredients';
import Info from './Info/Info';
import Comments from './Comments/Comments';
import './Recipe.css';

const Recipe = (props) => {
    console.log(props)

    return (
        <section>
            <h1>{props.recipe[0].title}</h1>
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