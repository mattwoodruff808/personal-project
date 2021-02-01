import {connect} from 'react-redux';
import './Comments.css';

const Comments = (props) => {
    return (
        <section>
            Comments
        </section>
    )
}

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps)(Comments);