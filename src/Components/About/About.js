import axios from 'axios';
import {useState, useEffect} from 'react';
import Stripe from './Stripe/Stripe';
import './About.css';

const About = (props) => {
    const [aboutPic, setAboutPic] = useState('');

    useEffect(() => {
        axios.get('/api/about-pic')
            .then(res => {
                setAboutPic(res.data)
            })
    }, [])

    return (
        <section>
            <h1>About Site Name</h1>
            <img src={aboutPic}
                 alt='Delicious recipe'/>
            <p>This is where it will explain how the site will work, the reason for it, etc.</p>
            <Stripe />
        </section>
    )
}

export default About;