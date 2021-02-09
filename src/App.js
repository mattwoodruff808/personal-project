import {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {getUser} from './redux/userReducer';
import Header from './Components/Header/Header';
import routes from './routes';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    axios.get('/api/user')
      .then(res => {
        this.props.getUser(res.data);
      })
  }

  render(){
    return (
      <div className="App">
        <Header />
        {routes}
      </div>
    );
  }
}

export default connect(null, {getUser})(App);