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
        <section className='Landing'>
            <header>
                <h1 className='first-text'>welcome to</h1>
                <h1>The Simple Things</h1>
            </header>
            <main>
                <Random 
                    pushFn={props.history.push}/>
                <aside className='side-menu'>
                    <h3>Categories</h3>
                    <ul>
                        <li name={null} onClick={handleAllRecipes}>All Recipes</li>
                        <li name='american' onClick={handleAmerican}>American</li>
                        <li name='brazilian' onClick={handleBrazilian}>Brazilian</li>
                    </ul>
                </aside>
            </main>
        </section>
    )
}

export default connect(null, {getCategory})(Landing);