import { Toolbar } from "../../components/Toolbar";
import { BurgerBuilder } from "../BurgerBuilder";
import css from "./style.module.css";

function App() {
  return (
    <div className="App">
      <Toolbar />
      <main className={css.Content}>
        <div>Content</div>
        <BurgerBuilder />
      </main>
    </div>
  );
}

export default App;
