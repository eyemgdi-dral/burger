import { Component, Fragment } from "react";
import { Route, Redirect } from "react-router-dom";
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
import Logout from "../Logout";
import { connect } from "react-redux";

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
    //TIP: Authenticated URL managing shown below
    render() {
        return (
            <div className="App">
                <Toolbar toggleSidebar={this.toggleSidebar} />
                <Sidebar
                    showSidebar={this.state.showSidebar}
                    toggleSidebar={this.toggleSidebar}
                />
                <main className={css.Content}>
                    <p>{this.props.localId}</p>
                    {this.props.localId ? (
                        <Fragment>
                            <Route exact path="/">
                                <p>Chosen Ingredient : {this.state.favorite}</p>
                                <BurgerBuilder choose={this.choose} />
                            </Route>
                            <Route exact path="/logout" component={Logout} />
                            <Route exact path="/orders" component={OrderPage} />
                            <Route
                                path="/orders/:id"
                                exact
                                component={OrderDetailPage}
                            />
                            <Route path="/checkout" component={Checkout} />
                        </Fragment>
                    ) : (
                        <Fragment>
                            <Route exact path="/login" component={LoginPage} />
                            <Route
                                exact
                                path="/signup"
                                component={SignupPage}
                            />
                            <Redirect to="/login"></Redirect>
                        </Fragment>
                    )}
                </main>
            </div>
        );
    }
}
const mapStateToProps = ({ reducerAuth }) => {
    return { localId: reducerAuth.localId };
};
export default connect(mapStateToProps)(App);
