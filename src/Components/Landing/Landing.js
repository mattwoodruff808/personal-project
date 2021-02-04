import {connect} from 'react-redux';
import {getCategory} from '../../redux/recipeReducer';
import Random from './Random/Random';
import './Landing.css';

const Landing = (props) => {
    const handleAllRecipes = () => {
       props.getCategory();
       props.history.push('/categ');
    }

    const handleAmerican = () => {
        props.getCategory('american');
        props.history.push('/categ');
    }
    
    const handleBrazilian = () => {
        props.getCategory('brazilian');
        props.history.push('/categ');
    }

    return (
        <section>
            <header>
                <h1>WELCOME TO SITE NAME</h1>
            </header>
            <main>
                <aside>
                    <h3>Categories</h3>
                    <ul>
                        <li name={null} onClick={handleAllRecipes}>All Recipes</li>
                        <li name='american' onClick={handleAmerican}>American</li>
                        <li name='brazilian' onClick={handleBrazilian}>Brazilian</li>
                    </ul>
                </aside>
                <Random 
                    pushFn={props.history.push}/>
            </main>
        </section>
    )
}

export default connect(null, {getCategory})(Landing);