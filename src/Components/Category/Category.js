import {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {getRecipe} from '../../redux/recipeReducer';
import Options from './Options/Options';
import './Category.css';

const Category = (props) => {
    console.log(props)
    const [search, setSearch] = useState('');
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        setRecipes(props.category.data);
        console.log(props.category.data)
    }, [props.category.data]);

    let mappedRecipes = recipes.map((el, i) => {
        return <Options key={i} recipePic={el.recipe_pic} title={el.title}/>
    })

    return (
        <section>
            {!props.category.data 
                ? 
                (
                    <h1>All Recipes</h1>
                ) 
                : 
                (
                    <h1>{props.category.data[0].category}</h1>
                )}
            <input
                value={search}
                placeholder='Enter Recipe'
                onChange={(e) => setSearch(e.target.value)}/>
            <button>Search Recipes</button>
            <button>Clear Search</button>
           {mappedRecipes}
        </section>
    )
}

const mapStateToProps = reduxState => {
    return {
        category: reduxState.recipeReducer.category
    }
}

export default connect(mapStateToProps, {getRecipe})(Category);