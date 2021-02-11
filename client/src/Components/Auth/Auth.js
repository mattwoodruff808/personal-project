import axios from 'axios';
import {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {getUser} from '../../redux/userReducer';
import './Auth.css';

const Auth = (props) => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [verPassword, setVerPassword] = useState('');
    const [registerView, setRegisterView] = useState(false);
    const [rand, setRand] = useState([]);

    useEffect(() => {
        axios.get('/api/landing-recipe')
            .then(res => {
                setRand(res.data);
            })
    }, []);

    const handleToggle = () => {
        setRegisterView(!registerView);
    }

    const handleRegister = () => {
        if (password && password === verPassword){
            axios.post('/api/register', {email, username, password})
                .then(res => {
                    props.getUser(res.data);
                    props.history.push('/');
                })
                .catch(err => console.log(err));
        } else {
            alert("Password's don't match");
            setPassword('');
            setVerPassword('');
        }
    }

    const handleLogin = () => {
        axios.post('/api/login', {email, password})
            .then(res => {
                props.getUser(res.data);
                props.history.push('/');
            })
            .catch(err=> console.log(err));
    }

    let mappedRand = rand.map((el, i) => {
        return <section key={i}>
                  <img src={el.recipe_pic} alt={el.title} />
               </section>
    })

    return (
        <section className='Auth'>
            <div className='auth-cont'>
                {registerView 
                    ? 
                    (
                        <h1>Register Account</h1>
                    ) 
                    : 
                    (
                        <h1>Account Login</h1>
                    )}
                <input 
                    value={email}
                    placeholder='Enter Email'
                    onChange={(e) => setEmail(e.target.value)}/>
                {registerView 
                    ? 
                    (
                        <input 
                            value={username}
                            placeholder='Choose Username'
                            onChange={(e) => setUsername(e.target.value)}/>
                    ) : null}
                <input 
                    value={password}
                    type='password'
                    placeholder='Enter Password'
                    onChange={(e) => setPassword(e.target.value)}/>
                {registerView 
                    ? 
                    (
                        <input 
                            value={verPassword}
                            type='password'
                            placeholder='Re-Enter Password'
                            onChange={(e) => setVerPassword(e.target.value)}/>
                    ) : null}
                {registerView 
                    ? 
                    (
                        <button onClick={handleRegister}>Register</button>
                    ) 
                    : 
                    (
                        <button onClick={handleLogin}>Login</button>
                    )}
                {registerView 
                    ? 
                    (
                        <p>Have an account already? <span onClick={handleToggle}>Login here.</span></p>
                    ) 
                    : 
                    (
                        <p>Don't have an account? <span onClick={handleToggle}>Register here.</span></p>
                    )}
            </div>
            <div className='auth-flex'>
                {mappedRand}
            </div>
        </section>
    )
}

export default connect(null, {getUser})(Auth);