import { Component } from "react";
import { Route } from "react-router-dom";
import { Sidebar } from "../../components/Sidebar";
import { Toolbar } from "../../components/Toolbar";
import BurgerBuilder from "../BurgerBuilder";
import Checkout from "../Checkout";
import OrderDetailPage from "../OrderDetailPage";
import OrderPage from "../OrderPage";
import css from "./style.module.css";
import "./style.css";
import LoginPage from "../LoginPage";
import SignupPage from "../SignupPage";

class App extends Component {
    state = {
        showSidebar: false,
        favorite: "N/A",
    };
    //TIP: how to prevState sample
    toggleSidebar = () => {
        this.setState((prevState) => {
            return { showSidebar: !prevState.showSidebar };
        });
    };
    choose = (ingredients) => {
        console.log("choose works", ingredients);
        this.setState({ favorite: ingredients });
    };
    render() {
        return (
            <div className="App">
                <Toolbar toggleSidebar={this.toggleSidebar} />
                <Sidebar
                    showSidebar={this.state.showSidebar}
                    toggleSidebar={this.toggleSidebar}
                />
                <main className={css.Content}>
                    <Route exact path="/">
                        <BurgerBuilder choose={this.choose} />
                    </Route>
                    <Route exact path="/login" component={LoginPage} />
                    <Route exact path="/signup" component={SignupPage} />
                    <Route exact path="/orders" component={OrderPage} />
                    <Route path="/burgerbuilder">
                        <p>Chosen Ingredient : {this.state.favorite}</p>
                        <BurgerBuilder choose={this.choose} />
                    </Route>
                    <Route
                        path="/orders/:id"
                        exact
                        component={OrderDetailPage}
                    />
                    <Route path="/checkout" component={Checkout} />
                </main>
            </div>
        );
    }
}

export default App;
