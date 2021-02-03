import {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {getRecipe} from '../../redux/recipeReducer';
import Options from './Options/Options';
import './Category.css';
import searchSvg from './image_search-24px.svg'

const Category = (props) => {
    // console.log(props)
    const [input, setInput] = useState('');
    const [filtered, setFiltered] = useState([]);
    console.log(filtered)

    let mappedRecipes = props.category.map((el, i) => {
        return <Options key={i} recipePic={el.recipe_pic} title={el.title}/>
    });

    let filteredRecipes = filtered.map((el, i) => {
        return <Options key={i} recipePic={el.recipe_pic} title={el.title}/>
    });

    const filterRecipes = (searchInp) => {
        let filteredGroup = [];

        props.category.filter(el => {
            if (el.title.toLowerCase().includes(searchInp.toLowerCase())){
                filteredGroup.push(el);
            } 
            return filteredGroup;
        })
        setFiltered(filteredGroup);
    }

    const clearSearch = () => {
        setFiltered([]);
        setInput('');
    }

    return (
        <section>
            {props.category.length > 0 && props.category[0].category
                ? 
                (
                    <h1>{props.category[0].category}</h1>
                ) 
                : 
                (
                    <h1>All Recipes</h1>
                )}
            <input
                value={input}
                placeholder='Enter Recipe'
                onChange={(e) => setInput(e.target.value)}/>
            <button onClick={() => filterRecipes(input)}>Search Recipes</button>
            <button onClick={clearSearch}>Clear Search</button>
           {filtered[0]
                ? 
                (
                    filteredRecipes
                ) 
                : 
                (
                    mappedRecipes
                )}
        </section>
    )
}

const mapStateToProps = reduxState => {
    return {
        category: reduxState.recipeReducer.category
    }
}

export default connect(mapStateToProps, {getRecipe})(Category);