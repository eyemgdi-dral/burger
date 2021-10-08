import "./style.css";
export const Shadow = (props) =>
  props.show ? (
    <div onClick={props.hideConfirmOrder} className="Shadow"></div>
  ) : null;
