import axios from 'axios';
import {Component} from 'react';
import {connect} from 'react-redux';
import {clearUser, getUser} from '../../redux/userReducer';
import {Link} from 'react-router-dom';
import './Header.css';
import arrowSvg from './arrow_drop_down-24px.svg';

class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            dropdownView: false
        }
    }

    componentDidMount(){
        
    }

    handleDropdown = () => {
        this.setState({dropdownView: !this.state.dropdownView});
    }

    handleLogout = () => {
        axios.get('/api/logout')
            .then(() => {
                this.props.clearUser();
                this.handleDropdown();
                // props.history.push('/');
            })
            .catch(err => console.log(err));
    }

    render(){
        return (
            <header>
                <Link to='/'><h1>The Simple Things</h1></Link>
                <nav>
                    <Link to='/about'><h3>About</h3></Link>
                    {!this.props.user
                        ? 
                        (
                            <nav>
                                <Link to='/auth'><h3>Login</h3></Link>
                            </nav>
                        )
                        : 
                        (
                            <nav>
                                <img src={this.props.user.profile_pic} alt={this.props.user.username} />
                                <h3>{this.props.user.username}</h3>
                                <img src={arrowSvg} alt='dropdown-arrow' onClick={this.handleDropdown} />
                                {this.state.dropdownView 
                                    ? 
                                    (
                                        <nav>
                                            <Link to='/profile'><h3 onClick={this.handleDropdown}>Profile</h3></Link>
                                            <h3 onClick={this.handleLogout}>Logout</h3>
                                        </nav>
                                    ) 
                                    : null}
                            </nav>
                        )}
                </nav>
            </header>
        )
    }
}

const mapStateToProps = reduxState => {
    return {
        user: reduxState.userReducer.user
    }
}

export default connect(mapStateToProps, {clearUser, getUser})(Header);