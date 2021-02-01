import Ingredients from './Ingredients/Ingredients';
import Info from './Info/Info';
import Comments from './Comments/Comments';
import './Recipe.css';

const Recipe = (props) => {
    return (
        <section>
            Recipe
            <Ingredients />
            <Info />
            <Comments />
        </section>
    )
}

export default Recipe;