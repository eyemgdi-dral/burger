import { Logo } from "../General/Logo";
import { Shadow } from "../General/Shadow";
import { Menu } from "../Menu";
import "./style.css";

export const Sidebar = () => {
  return (
    <div>
      <Shadow />
      <div className="Sidebar">
        <div>
          <Logo />
        </div>
        <Menu />
      </div>
    </div>
  );
};
