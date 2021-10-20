import { Component } from "react";
import { connect } from "react-redux";
import { Modal } from "../../components/General/Modal";
import Burger from "../../components/Burger";
import BurgerControls from "../../components/BurgerControls";
import { OrderSummary } from "../../components/OrderSummary";
import axios from "../../api/axiosInstance";
import { Spinner } from "../../components/General/Spinner";
import {
    decIngredient,
    incIngredient,
} from "../../redux/actions/actionsBurger";

// export const BurgerBuilder = () => {
//   return <div>BurgerBuilder</div>;
// };
const INGREDIENT_PRICES = { salad: 150, cheese: 250, bacon: 800, meat: 1500 };
const INGREDIENT_NAMES = {
    bacon: "Гахайн мах",
    meat: "Үхрийн мах",
    salad: "Салад",
    cheese: "Бяслага",
};
const API =
    "https://burger-f4559-default-rtdb.asia-southeast1.firebasedatabase.app/";

class BurgerBuilder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            purchasing: false,
            confirmOrder: false,
            isLoading: false,
        };
    }

    componentDidMount = () => {
        // this.getLastBurger();
    };

    getLastBurger = () => {
        this.setState({ isLoading: true });
        axios
            .get("/orders.json")
            .then((response) => {
                console.log("response", response);
                const arr = Object.entries(response.data);
                arr.forEach((item) => {
                    // console.log("item[1]", item[1]);
                });
                const lastOrder = arr[arr.length - 1][1];
                console.log("lastOrder", lastOrder);
                this.setState({
                    ingredients: lastOrder.ingredients,
                    totalPrice: lastOrder.price,
                });
            })
            .finally(() => {
                this.setState({ isLoading: false });
            });
    };

    proceedToOrderPage = () => {
        this.hideConfirmOrder();
        let query = [];
        for (const prop in this.props.ingredients) {
            let str = prop + "=" + this.props.ingredients[prop];
            query.push(str);
        }

        query.push("totalPrice=" + this.props.totalPrice);

        this.props.history.push({
            pathname: "/checkout",
            search: query.join("&"),
        });
    };

    showConfirmOrder = () => {
        this.setState({ confirmOrder: true });
    };
    hideConfirmOrder = () => {
        this.setState({ confirmOrder: false });
    };

    incIngredient = (type) => {
        const newIngredient = { ...this.props.ingredients };
        newIngredient[type]++;
        const newPrice = this.props.totalPrice + INGREDIENT_PRICES[type];
        this.setState({ ingredients: newIngredient, totalPrice: newPrice });
    };
    decIngredient = (type) => {
        const newIngredient = { ...this.props.ingredients };
        if (newIngredient[type] > 0) {
            newIngredient[type]--;
        }
        const newPrice = this.props.totalPrice - INGREDIENT_PRICES[type];
        this.setState({ ingredients: newIngredient, totalPrice: newPrice });
    };

    render() {
        const disIngredients = { ...this.props.ingredients };
        for (const key in disIngredients) {
            disIngredients[key] = disIngredients[key] <= 0;
        }
        return (
            <div>
                {this.state.isLoading ? (
                    <Spinner />
                ) : (
                    <Burger choose={this.props.choose}></Burger>
                )}

                <BurgerControls
                    totalPrice={this.props.totalPrice}
                    disIngredients={disIngredients}
                    showConfirmOrder={this.showConfirmOrder}
                    purchasing={this.props.purchasing}
                ></BurgerControls>
                <Modal
                    showModal={this.state.confirmOrder}
                    hideConfirmOrder={this.hideConfirmOrder}
                >
                    {this.state.isLoading ? (
                        <Spinner />
                    ) : (
                        <OrderSummary
                            ingredientNames={INGREDIENT_NAMES}
                            ingredients={this.props.ingredients}
                            totalPrice={this.props.totalPrice}
                            onCancel={this.hideConfirmOrder}
                            onContinue={this.proceedToOrderPage}
                        ></OrderSummary>
                    )}
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ingredients: state.ingredients,
        totalPrice: state.totalPrice,
        purchasing: state.purchasing,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        incIngredient: (ingredientName) =>
            dispatch(incIngredient(ingredientName)),
        decIngredient: (ingredientName) =>
            dispatch(decIngredient(ingredientName)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BurgerBuilder);
