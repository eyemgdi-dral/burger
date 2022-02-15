import { MenuItem } from "../MenuItem";
import "./style.css";

export const Menu = () => {
    return (
        <div>
            <ul className="Menu">
                {/* TIP: when passing boolean */}
                <MenuItem exact name="Home" link="/" />
                <MenuItem exact name="Login" link="/login" />
                <MenuItem exact name="Sign Up" link="/signup" />
                <MenuItem exact name="Order" link="/orders" />
                <MenuItem exact name="Burger" link="/burgerbuilder" />
                <MenuItem exact name="Checkout" link="/checkout" />
            </ul>
        </div>
    );
};
