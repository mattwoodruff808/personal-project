import axios from 'axios';
import {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {getUser} from '../../redux/userReducer';
import Upload from './Upload/Upload';
import './Profile.css';

const Profile = (props) => {
    const [editPicView, setEditPicView] = useState(false);
    const [profilePic, setProfilePic] = useState('');

    useEffect(() => {
        setProfilePic(props.user.profile_pic);
    }, [props.user.profile_pic])

    const toggleEditView = () => {
        setEditPicView(!editPicView);
    }

    return (
        <section>
            {console.log(props.user)}
            <h1>Your Profile</h1>
            {editPicView
                ?
                (
                    <Upload 
                        toggleFn={toggleEditView}
                        userId={props.user.user_id}
                        getUserFn={props.getUser}/>
                )
                :
                (
                    <div>
                        <img src={profilePic}
                             alt={props.user.username}/>
                        <button onClick={toggleEditView}>Change Profile Picture</button>
                    </div>
                )}
            <p>Username: {props.user.username}</p>
            <p>Email: {props.user.email}</p>
        </section>
    )
}

const mapStateToProps = reduxState => {
    return {
        user: reduxState.userReducer.user
    }
};

export default connect(mapStateToProps, {getUser})(Profile);