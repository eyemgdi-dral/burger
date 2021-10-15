import { Component } from "react";
import { Route } from "react-router";
import { ContactPage } from "../ContactPage";
import Burger from "../../components/Burger";
import { Button } from "../../components/General/Button";
import "./style.css";

export class Checkout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ingredients: {
                salad: 0,
                cheese: 0,
            },
            isLoading: 0,
            purchasing: false,
        };
    }
    componentDidMount() {
        console.log("this.props.location.search", this.props);

        const query = new URLSearchParams(this.props.location.search);
        let ingredients = {};

        for (const param of query.entries()) {
            ingredients[param[0]] = param[1];
        }
        this.setState({ ingredients });
    }
    goBack = () => {
        this.props.history.goBack();
    };
    showContactData = () => {
        this.props.history.push("/checkout/contact");
    };
    render() {
        return (
            <div>
                <Burger ingredients={this.state.ingredients} />
                <Button name="go back" clicked={this.goBack} />
                <Button name="Contact" clicked={this.showContactData} />
                <Route path="/checkout/contact" component={ContactPage} />
            </div>
        );
    }
}
