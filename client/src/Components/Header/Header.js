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

    handleDropdown = () => {
        this.setState({dropdownView: !this.state.dropdownView});
    }

    closeDropdown = () => {
        if (this.state.dropdownView === true){
            return this.setState({dropdownView: false})
        }
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
            <header className='Header'>
                <Link to='/' className='link' onClick={this.closeDropdown}><h1>The Simple Things</h1></Link>
                <nav>
                    <Link to='/about' className='link' onClick={this.closeDropdown}><h3>About</h3></Link>
                    <h1>|</h1>
                    {!this.props.user
                        ? 
                        (
                            <nav>
                                <Link to='/auth' className='link'><h3>Login</h3></Link>
                            </nav>
                        )
                        : 
                        (
                            <nav className='authenticated'>
                                <img src={this.props.user.profile_pic} alt={this.props.user.username} className='head-pic'/>
                                <h3>{this.props.user.username}</h3>
                                <img src={arrowSvg} alt='dropdown-arrow' onClick={this.handleDropdown} />
                                {this.state.dropdownView 
                                    ? 
                                    (
                                        <nav className='head-dropdown'>
                                            <Link to='/profile' className='link'><h3 onClick={this.handleDropdown}>Profile</h3></Link>
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