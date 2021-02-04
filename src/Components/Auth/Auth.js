import axios from 'axios';
import {useState} from 'react';
import {connect} from 'react-redux';
import {getUser} from '../../redux/userReducer';
import './Auth.css';

const Auth = (props) => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [verPassword, setVerPassword] = useState('');
    const [registerView, setRegisterView] = useState(false);

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

    return (
        <section>
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
        </section>
    )
}

export default connect(null, {getUser})(Auth);