import {connect} from 'react-redux';
import {getUser} from '../../redux/userReducer';
import './Auth.css';

const Auth = (props) => {
    return (
        <section>
            Auth
        </section>
    )
}

export default connect(null, {getUser})(Auth);