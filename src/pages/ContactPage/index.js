import { Component } from "react";
import axios from "../../api/axiosInstance";
import { Button } from "../../components/General/Button";
import { Spinner } from "../../components/General/Spinner";
import { withRouter } from "react-router";
import "./style.css";
import { connect } from "react-redux";
import { proceedOrder } from "../../redux/actions/actionsOrder";

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

        this.props.proceedOrder(order);
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
                {this.props.isLoading ? (
                    <Spinner />
                ) : (
                    <Button name="Purchase" clicked={this.proceedOrder} />
                )}
            </div>
        );
    }
}

const mapStateToProp = ({ reducerBurger }) => {
    return {
        ingredients: reducerBurger.ingredients,
        totalPrice: reducerBurger.totalPrice,
    };
};

const mapDispatchToProp = (dispatch) => {
    return {
        proceedOrder: (order) => dispatch(proceedOrder(order)),
    };
};

export default connect(
    mapStateToProp,
    mapDispatchToProp
)(withRouter(ContactPage));
