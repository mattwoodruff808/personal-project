import './Options.css';

const Options = (props) => {
    return (
        <section>
            <img src={props.recipePic} alt='recipe'/>
            <h3>{props.title}</h3>
        </section>
    )
}

export default Options;