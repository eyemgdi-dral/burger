import { Sidebar } from "../../components/Sidebar";
import { Toolbar } from "../../components/Toolbar";
import { BurgerBuilder } from "../BurgerBuilder";
import css from "./style.module.css";

function App() {
  return (
    <div className="App">
      <Toolbar />
      <Sidebar />
      <main className={css.Content}>
        <div>Content</div>
        <BurgerBuilder />
      </main>
    </div>
  );
}

export default App;
