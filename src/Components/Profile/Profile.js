import {connect} from 'react-redux';
import {getUser} from '../../redux/userReducer';
import './Profile.css';

const Profile = (props) => {
    return (
        <section>
            Profile
        </section>
    )
}

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps, {getUser})(Profile);