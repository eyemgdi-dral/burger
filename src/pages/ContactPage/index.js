import { Component } from "react";
import axiosInstance from "../../api/axiosInstance";
import { Button } from "../../components/General/Button";
import { Spinner } from "../../components/General/Spinner";
import { withRouter } from "react-router";
import "./style.css";
import { connect } from "react-redux";

class ContactPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            name: "",
            city: "",
            street: "",
            isLoading: false,
        };
    }
    proceedOrder = () => {
        this.setState({ isLoading: true });
        let address = {
            name: this.state.name,
            city: this.state.city,
            street: this.state.street,
        };
        const order = {
            ingredients: this.props.ingredients,
            totalPrice: this.props.totalPrice,
            address,
        };

        axiosInstance
            .post(`/orders.json`, order)
            .then((response) => {
                alert("Success");
            })
            .finally(() => {
                this.setState({ isLoading: false });
                this.props.history.push("/");
            });
    };
    onChangeName = (e) => {
        this.setState({ name: e.target.value });
    };
    onChangeCity = (e) => {
        this.setState({ city: e.target.value });
    };
    onChangeStreet = (e) => {
        this.setState({ street: e.target.value });
    };

    render() {
        return (
            <div className="Contact">
                <p>Contact - {this.state.name}</p>
                <input
                    type="text"
                    placeholder="Your Name"
                    onChange={this.onChangeName}
                />
                <input
                    type="text"
                    placeholder="Your City"
                    onChange={this.onChangeCity}
                />
                <input
                    type="text"
                    placeholder="Your Street"
                    onChange={this.onChangeStreet}
                />
                {this.state.isLoading ? (
                    <Spinner />
                ) : (
                    <Button name="Purchase" clicked={this.proceedOrder} />
                )}
            </div>
        );
    }
}

const a = ({ reducerBurger }) => {
    return {
        ingredients: reducerBurger.ingredients,
        totalPrice: reducerBurger.totalPrice,
    };
};

export default connect(a)(withRouter(ContactPage));
