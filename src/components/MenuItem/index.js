import { NavLink } from "react-router-dom";
import "./style.css";

export const MenuItem = (props) => {
    return (
        <li className="MenuItem">
            <NavLink
                exact={props.exact}
                activeClassName="active"
                to={props.link}
            >
                {props.name}
            </NavLink>
        </li>
    );
};
