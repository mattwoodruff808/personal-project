import {useState} from 'react';
import {connect} from 'react-redux';
import {getRecipe} from '../../redux/recipeReducer';
import Options from './Options/Options';
import './Category.css';

const Category = (props) => {
    const [input, setInput] = useState('');
    const [filtered, setFiltered] = useState([]);
    
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

    let mappedRecipes = props.category.map((el, i) => {
        return <Options key={i}
                        recipeId={el.recipe_id}
                        recipePic={el.recipe_pic}
                        title={el.title}
                        pushFn={props.history.push}/>
    });

    let filteredRecipes = filtered.map((el, i) => {
        return <Options key={i}
                        recipeId={el.recipe_id}
                        recipePic={el.recipe_pic} 
                        title={el.title}
                        pushFn={props.history.push}/>
    });

    return (
        <section className='Category'>
            {props.category.length > 0 && props.category[0].category
                ? 
                (
                    <h1>{props.category[0].category}</h1>
                ) 
                : 
                (
                    <h1>All Recipes</h1>
                )}
            <div className='search'>
                <input
                    value={input}
                    placeholder='Enter Recipe'
                    onChange={(e) => setInput(e.target.value)}/>
                <button className='search-btn' onClick={() => filterRecipes(input)}>Search Recipes</button>
                <button onClick={clearSearch}>Clear Search</button>
            </div>
            <div className='search-flex'>
            {filtered[0]
                ? 
                (
                    filteredRecipes
                ) 
                : 
                (
                    mappedRecipes
                )}
            </div>
        </section>
    )
}

const mapStateToProps = reduxState => {
    return {
        category: reduxState.recipeReducer.category
    }
}

export default connect(mapStateToProps, {getRecipe})(Category);