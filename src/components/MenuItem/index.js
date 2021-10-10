import "./style.css";

export const MenuItem = (props) => {
  return (
    <li className="MenuItem">
      <a className={`${props.active ? "active" : ""}`} href={props.link}>
        {props.name}
      </a>
    </li>
  );
};
