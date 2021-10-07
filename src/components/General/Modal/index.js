import "./style.css";
export const Modal = (props) => (
  <div className="Modal">
    <div className="content">{props.children}</div>
  </div>
);
