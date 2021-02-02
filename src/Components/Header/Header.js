import axios from 'axios';
import {useState} from 'react';
import {connect} from 'react-redux';
import {getUser, clearUser} from '../../redux/userReducer';
import {Link} from 'react-router-dom';
import './Header.css';
import arrowSvg from './arrow_drop_down-24px.svg'

const Header = (props) => {
    // console.log(props)
    const [dropdownView, setDropdownView] = useState(false);

    const handleDropdown = () => {
        setDropdownView(!dropdownView);
    }

    const handleLogout = () => {
        axios.get('/api/logout')
            .then(() => {
                props.clearUser();
                props.history.push('/');
            })
            .catch(err => console.log(err));
    }

    return (
        <header>
            <Link to='/'><h1>SITE NAME</h1></Link>
            <nav>
                <Link to='/about'><h3>About</h3></Link>
                {!props.user.email 
                    ? 
                    (
                        <nav>
                            <Link to='/auth'><h3>Login</h3></Link>
                        </nav>
                    )
                    : 
                    (
                        <nav>
                            <img src={props.user.profile_pic} alt={props.user.username} />
                            <h3>{props.user.username}</h3>
                            <img src={arrowSvg} alt='dropdown-arrow' onClick={handleDropdown} />
                            {dropdownView 
                                ? 
                                (
                                    <nav>
                                        <Link to='/profile'><h3 onClick={handleDropdown}>Profile</h3></Link>
                                        <h3 onClick={handleLogout}>Logout</h3>
                                    </nav>
                                ) 
                                : null}
                        </nav>
                    )}
            </nav>
        </header>
    )
}

const mapStateToProps = reduxState => {
    return {
        user: reduxState.userReducer.user
    }
}

export default connect(mapStateToProps, {getUser, clearUser})(Header);