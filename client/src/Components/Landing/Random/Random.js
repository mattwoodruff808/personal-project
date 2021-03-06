import axios from 'axios';
import {useState, useEffect} from 'react';
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
        return <main key={i} onClick={() => handleDirection(el.recipe_id)}>
                  <img src={el.recipe_pic} alt={el.title} />
                  <div>
                    <h2 className='rand-title'>{el.title}</h2>
                    <h3 className='rand-blurb'>{el.blurb}</h3>
                  </div>
               </main>
    })

    return (
        <section className='Random'>
            <h3>Try Something New!</h3>
            {mappedRand}
        </section>
    )
}

export default connect(null, {getRecipe})(Random);