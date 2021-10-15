import { Component } from "react";
import { Link } from "react-router-dom";
import axios from "../../api/axiosInstance";
import Burger from "../../components/Burger";
import { Spinner } from "../../components/General/Spinner";
import "./style.css";

export class OrderPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            purchasing: false,
            orders: [],
        };
    }

    clearOrders = () => {
        this.setState({ orders: [] });
    };

    getOrders = () => {
        this.setState({ isLoading: true });
        axios
            .get("/orders.json")
            .then((response) => {
                console.log("response", response);

                this.setState({ orders: response.data });
            })
            .finally(() => {
                this.setState({ isLoading: false });
            });
    };

    componentDidMount() {
        this.getOrders();
    }

    render() {
        const orders = Object.entries(this.state.orders);
        console.log("orders", orders);

        return (
            <div>
                <h1>OrderPage</h1>
                <small onClick={this.clearOrders}>Clear order</small>
                {this.state.isLoading ? (
                    <Spinner />
                ) : orders.length > 0 ? (
                    <ul className="order-list">
                        {orders.map((order, idx) => (
                            <li key={idx}>
                                <Burger ingredients={order[1].ingredients} />
                                <Link to={`/orders/${order[0]}`}>
                                    {order[1].price}
                                </Link>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>There is no order</p>
                )}
            </div>
        );
    }
}
