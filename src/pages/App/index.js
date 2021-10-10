import { Component } from "react";
import { Sidebar } from "../../components/Sidebar";
import { Toolbar } from "../../components/Toolbar";
import { BurgerBuilder } from "../BurgerBuilder";
import css from "./style.module.css";

class App extends Component {

  state = {
    showSidebar: false
  }
  //TIP: how to prevState sample
  toggleSidebar = () =>{
    this.setState( prevState => {
      return {showSidebar: !prevState.showSidebar}
    })
  }
  render(){
    return (
      <div className="App">
        <Toolbar toggleSidebar = {this.toggleSidebar}/>
        <Sidebar showSidebar={this.state.showSidebar} toggleSidebar = {this.toggleSidebar} />
        <main className={css.Content}>
          <div>Content</div>
          <BurgerBuilder />
        </main>
      </div>
    )
  }
}

export default App;
