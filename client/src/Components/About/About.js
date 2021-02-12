import axios from 'axios';
import {useState, useEffect} from 'react';
import './About.css';

const About = (props) => {
    const [aboutPic, setAboutPic] = useState('');

    useEffect(() => {
        axios.get('/api/about-pic')
            .then(res => {
                setAboutPic(res.data);
            })
    }, [])

    return (
        <section className='About'>
            <h1>The Simple Things</h1>
            <main>
                <img src={aboutPic.length > 0 && aboutPic[0].recipe_pic}
                    alt='Delicious recipe'/>
                <div className='about-text'>
                    <p>"It's The Simple Things. . ." Have you ever heard that phrase before? The longer I have lived, the more I have realized how true that statement is. For me, some of my Simple Things have been the meals and treats that I shared with family and friends.</p>
                    <p>Over my lifetime I have run across some spectacular recipes in my family, and every time the same thought crossed my mind: "I should put all of these recipes into a cookbook and share it with my family!" Well, here it is! This website is a lifetime in the making, and it is finally here. I hope, as you browse through these cherished recipes and memories, that you are able to pick up one or two Simple Things for yourself. Enjoy!</p>
                </div>
            </main>
        </section>
    )
}

export default About;