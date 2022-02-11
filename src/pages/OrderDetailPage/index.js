import { Component } from "react";
import axios from "../../api/axiosInstance";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { getOrder } from "../../redux/actions/actionsOrder";

import "./style.css";

class OrderDetailPage extends Component {
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
        this.props.getOrder(this.props.match.params.id);
    }
    render() {
        console.log("props", this.props);

        return (
            <div>
                <h1>OrderDetailPage {this.props.match.params.id} </h1>
            </div>
        );
    }
}

const mapStateToProp = (state) => {
    return {};
};

const mapDispatchToProp = (dispatch) => {
    return {
        getOrder: (id) => dispatch(getOrder(id)),
    };
};

export default connect(
    mapStateToProp,
    mapDispatchToProp
)(withRouter(OrderDetailPage));
