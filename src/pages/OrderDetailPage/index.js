import { Component } from "react";
import axios from "../../api/axiosInstance";
import "./style.css";

export class OrderDetailPage extends Component {
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
    getOrder = () => {
        axios
            .get("/orders/" + this.props.match.params.id)
            .then(() => {
                this.setState({ isLoading: true });
            })
            .finally(() => {
                this.setState({ isLoading: false });
            });
    };
    componentDidMount() {
        this.getOrder();
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
