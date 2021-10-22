import { Component } from "react";
import { Route } from "react-router";
import ContactPage from "../ContactPage";
import Burger from "../../components/Burger";
import { Button } from "../../components/General/Button";
import "./style.css";
import axios from "../../api/axiosInstance";
import { connect } from "react-redux";

class Checkout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
        };
    }

    componentDidMount() {
        const query = new URLSearchParams(this.props.location.search);
        let ingredients = {};
        let totalPrice = 0;

        for (const param of query.entries()) {
            if (param[0] !== "totalPrice") {
                ingredients[param[0]] = param[1];
            } else {
                totalPrice = param[1];
            }
        }
        this.setState({ ingredients, totalPrice });
    }
    goBack = () => {
        this.props.history.goBack();
        // this.props.history.push("/");
    };
    showContactData = () => {
        this.props.history.replace("/checkout/contact");
    };
    render() {
        return (
            <div>
                <h3>{this.props.totalPrice}</h3>
                <Burger />
                <Button name="go back" clicked={this.goBack} />
                <Button name="Contact" clicked={this.showContactData} />
                <Route path="/checkout/contact">
                    <ContactPage
                        ingredients={this.props.ingredients}
                        totalPrice={this.props.totalPrice}
                    ></ContactPage>
                </Route>
            </div>
        );
    }
}

const a = (state) => {
    return {
        totalPrice: state.totalPrice,
        ingredients: state.ingredients,
    };
};

export default connect(a)(Checkout);
