import { Logo } from "../General/Logo";
import { Menu } from "../Menu";
import css from "./style.module.css";
export const Toolbar = () => {
  return (
    <header className={css.Toolbar}>
      <div></div>
      <div>
        <Logo />
      </div>
      <nav className={css.hideOnMobile}>
        <Menu />
      </nav>
    </header>
  );
};
