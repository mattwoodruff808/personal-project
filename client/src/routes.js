import {Switch, Route} from 'react-router-dom';
import Landing from './Components/Landing/Landing';
import Category from './Components/Category/Category';
import Auth from './Components/Auth/Auth';
import Recipe from './Components/Recipe/Recipe';
import Profile from './Components/Profile/Profile';
import About from './Components/About/About';

export default (
    <Switch>
        <Route exact path='/' component={Landing} />
        <Route path='/categ' component={Category} />
        <Route path='/auth' component={Auth} />
        <Route path='/recipe' component={Recipe} />
        <Route path='/profile' component={Profile} />
        <Route path='/about' component={About} />
    </Switch>
)