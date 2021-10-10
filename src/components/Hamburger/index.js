import "./style.css";

export const Hamburger = (props) => {
  return (
    <div>
      <div onClick={props.toggleSidebar}>Ham</div>
    </div>
  );
};
