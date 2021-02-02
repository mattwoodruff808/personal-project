import {connect} from 'react-redux';
import Options from './Options/Options';
import './Category.css';

const Category = (props) => {
    console.log(props)

    return (
        <section>
            <h1>{props.category.data[0].category}</h1>
            <Options />
        </section>
    )
}

const mapStateToProps = reduxState => {
    return {
        category: reduxState.recipeReducer.category,
    }
}

export default connect(mapStateToProps)(Category);