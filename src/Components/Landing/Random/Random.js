import axios from 'axios';
import { useState, useEffect } from 'react';
import {connect} from 'react-redux';
import {getRecipe} from '../../../redux/recipeReducer';
import './Random.css';

const Random = (props) => {
    const [rand, setRand] = useState([]);

    useEffect(() => {
        axios.get('/api/landing-recipe')
            .then(res => {
                setRand(res.data);
            })
    }, []);

    const handleDirection = (recipeId) => {
        props.getRecipe(recipeId);
        props.pushFn('/recipe');
    }

    let mappedRand = rand.map((el, i) => {
        return <main key={i}>
                  <img src={el.recipe_pic} alt={el.title} onClick={() => handleDirection(el.recipe_id)} />
                  <h3 onClick={() => handleDirection(el.recipe_id)}>{el.blurb}</h3>
               </main>
    })

    return (
        <section>
            <h3>Try Something New!</h3>
            {mappedRand}
        </section>
    )
}

export default connect(null, {getRecipe})(Random);