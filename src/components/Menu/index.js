import { MenuItem } from "../MenuItem";
import "./style.css";

export const Menu = () => {
  return (
    <div>
      <ul className="Menu">
        {/* TIP: when passing boolean */}
        <MenuItem name="Login" link="/login" />
        <MenuItem name="Burger" link="/burgerbuilder" />
        <MenuItem name="Checkout" link="/checkout" />
      </ul>
    </div>
  );
};
