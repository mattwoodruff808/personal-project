import axios from 'axios';
import {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {getUser} from '../../redux/userReducer';
import './Profile.css';

const Profile = (props) => {
    const [urlInp, setUrlInp] = useState('');
    const [editPicView, setEditPicView] = useState(false);
    const [profilePic, setProfilePic] = useState('');

    useEffect(() => {
        setProfilePic(props.user.profile_pic);
    }, [])

    const toggleEditView = () => {
        setEditPicView(!editPicView);
        setUrlInp('');
    }

    const editProfilePic = () => {
        const {user_id} = props.user;

        axios.put(`/api/profile-pic/${user_id}`, {newProfilePic: urlInp})
            .then(res => {
                getUser(res.data);
                setUrlInp('');
                toggleEditView();
            })
            .catch(err => console.log(err));
    }

    return (
        <section>
            <h1>Your Profile</h1>
            <img src={profilePic}
                 alt={props.user.username}/>
            {editPicView 
                ? 
                (
                    <div>
                        <input 
                            value={urlInp}
                            placeholder='Enter URL Here'
                            onChange={(e) => setUrlInp(e.target.value)}/>
                        <button onClick={editProfilePic}>Submit</button>
                        <button onClick={toggleEditView}>Cancel</button>
                    </div>
                ) 
                : 
                (
                    <button onClick={toggleEditView}>Change Profile Picture</button>
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