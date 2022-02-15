export const Button = (props) => (
    <button className="control" onClick={props.clicked}>
        {props.name}
    </button>
);
