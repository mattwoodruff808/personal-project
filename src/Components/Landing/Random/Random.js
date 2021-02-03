import axios from 'axios';
import { useState, useEffect } from 'react';
import './Random.css';

const Random = (props) => {
    const [rand, setRand] = useState([])

    useEffect(() => {
        axios.get('/api/landing-recipe')
            .then(res => {
                setRand(res.data);
                console.log(res.data)
            })
    }, []);

    let mappedRand = rand.map((el, i) => {
        return <main key={i}>
                  <img src={el.recipe_pic} alt='recipe' />
                  <h3>{el.blurb}</h3>
               </main>
    })

    return (
        <section>
            <h3>Try Something New!</h3>
            {mappedRand}
        </section>
    )
}

export default Random;