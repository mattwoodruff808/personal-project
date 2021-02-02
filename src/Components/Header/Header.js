import {connect} from 'react-redux';
import {getUser, clearUser} from '../../redux/userReducer';
import {Link} from 'react-router-dom';
import './Header.css';

const Header = (props) => {
    return (
        <header>
            Header
        </header>
    )
}

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps, {getUser, clearUser})(Header);