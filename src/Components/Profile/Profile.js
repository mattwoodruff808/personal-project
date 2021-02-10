import axios from 'axios';
import {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {getUser} from '../../redux/userReducer';
import Upload from './Upload/Upload';
import './Profile.css';

const Profile = (props) => {
    const [editPicView, setEditPicView] = useState(false);

    useEffect(() => {
        if (!props.user){
            props.history.push('/');
        }
    }, [props.user])

    const toggleEditView = () => {
        setEditPicView(!editPicView);
    }

    return (
        <section>
            {props.user 
                && 
                (
                    <div>
                        <h1>Your Profile</h1>
                        {editPicView
                            ?
                            (
                                <Upload
                                    userId={props.user.user_id}
                                    toggleFn={toggleEditView}
                                    getUserFn={props.getUser}/>
                            )
                            :
                            (
                                <div>
                                    <img src={props.user.profile_pic}
                                         alt={props.user.username}/>
                                    <button onClick={toggleEditView}>Change Profile Picture</button>
                                </div>
                            )}
                        <p>Username: {props.user.username}</p>
                        <p>Email: {props.user.email}</p>
                    </div>
                )}
        </section>
    )
}

const mapStateToProps = reduxState => {
    return {
        user: reduxState.userReducer.user
    }
};

export default connect(mapStateToProps, {getUser})(Profile);