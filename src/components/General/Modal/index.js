import { Shadow } from "../Shadow";
import "./style.css";
export const Modal = (props) => {
  return (
    <div>
      <Shadow show={props.showModal} hideShadow={props.hideConfirmOrder} />
      <div className={`Modal ${props.showModal ? "show" : "hide"}`}>
        <div className="content">{props.children}</div>
      </div>
    </div>
  );
};
