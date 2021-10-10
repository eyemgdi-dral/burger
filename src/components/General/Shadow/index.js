import "./style.css";
export const Shadow = (props) =>
  props.show ? <div onClick={props.hideShadow} className="Shadow"></div> : null;
