import {connect} from 'react-redux';
import {getRecipe} from '../../../redux/recipeReducer';
import './Info.css';

const Info = (props) => {
    return (
        <section>
            Info
        </section>
    )
}

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps, {getRecipe})(Info);