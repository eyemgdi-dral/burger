import { Logo } from "../General/Logo";
import { Shadow } from "../General/Shadow";
import { Menu } from "../Menu";
import "./style.css";

export const Sidebar = (props) => {
  //TIP: this might look like these when using modular css
  // let classes = [css.Class, css.Close]
  {
    /* <div className={classes.join(" ")}> */
  }
  return (
    <div>
      <Shadow show={props.showSidebar} hideShadow={props.toggleSidebar} />
      <div className={`Sidebar ${props.showSidebar ? "open" : "close"}`}>
        <div>
          <Logo />
        </div>
        <Menu />
      </div>
    </div>
  );
};
