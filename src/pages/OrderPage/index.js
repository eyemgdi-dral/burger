import { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import axios from "../../api/axiosInstance";
import Burger from "../../components/Burger";
import { Spinner } from "../../components/General/Spinner";
import { getOrders } from "../../redux/actions/actionsOrder";
import "./style.css";

class OrderPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            purchasing: false,
        };
    }

    componentDidMount() {
        this.props.getOrders();
    }

    render() {
        return (
            <div>
                <h1>OrderPage</h1>
                <small onClick={this.clearOrders}>Clear order</small>
                {this.props.isLoading ? (
                    <Spinner />
                ) : this.props.orders.length > 0 ? (
                    <ul className="order-list">
                        {this.props.orders.map((order, idx) => (
                            <li key={idx}>
                                {/* TIP: Burger-n igredients-g gadnaas awdgaar hiiwel olon gazar ashiglahad arai hyalbar yum bna. */}
                                <div>
                                    {/* <Burger ingredients={order[1].ingredients} /> */}
                                    {order[1].address.city},{" "}
                                    {order[1].address.street} |{" "}
                                    {order[1].address.name}
                                    <Link to={`/orders/${order[0]}`}>
                                        {order[1].totalPrice}
                                    </Link>
                                </div>
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

const mapStateToProp = ({ reducerOrder }) => {
    return {
        orders: reducerOrder.orders,
        isLoading: reducerOrder.isLoading,
    };
};

const mapDispatchToProp = (dispatch) => {
    return {
        getOrders: () => dispatch(getOrders()),
    };
};

export default connect(mapStateToProp, mapDispatchToProp)(OrderPage);
