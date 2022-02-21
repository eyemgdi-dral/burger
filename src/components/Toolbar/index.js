import { Logo } from "../General/Logo";
import { Hamburger } from "../Hamburger";
import Menu from "../Menu";
import css from "./style.module.css";
export const Toolbar = (props) => {
    return (
        <header className={css.Toolbar}>
            <div>
                <Hamburger toggleSidebar={props.toggleSidebar} />
            </div>
            <div>
                <Logo />
            </div>
            <nav className={css.hideOnMobile}>
                <Menu />
            </nav>
        </header>
    );
};
