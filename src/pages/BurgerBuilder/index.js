import { Component } from "react";
import { Modal } from "../../components/General/Modal";
import Burger from "../../components/Burger";
import { BurgerControls } from "../../components/BurgerControls";
import { OrderSummary } from "../../components/OrderSummary";
import axios from "../../api/axiosInstance";
import { Spinner } from "../../components/General/Spinner";
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

export class BurgerBuilder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ingredients: {
                salad: 0,
                cheese: 0,
                bacon: 0,
                meat: 0,
            },
            totalPrice: 0,
            purchasing: false,
            confirmOrder: false,
            isLoading: false,
        };
    }

    componentDidMount = () => {
        this.getLastBurger();
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
        for (const prop in this.state.ingredients) {
            let str = prop + "=" + this.state.ingredients[prop];
            query.push(str);
        }

        this.props.history.push({
            pathname: "/checkout",
            search: query.join("&"),
        });
    };

    proceedOrder = () => {
        this.setState({ isLoading: true });
        console.log("proceeding");
        const order = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            adress: {
                name: "Saraa",
                city: "UB",
                street: "10r horoolol",
            },
        };
        axios
            .post(`/orders.json`, order)
            .then((response) => {
                console.log("response", response);
                alert("Success");
                this.hideConfirmOrder();
            })
            .finally(() => {
                this.setState({ isLoading: false });
            });
    };

    showConfirmOrder = () => {
        this.setState({ confirmOrder: true });
    };
    hideConfirmOrder = () => {
        this.setState({ confirmOrder: false });
    };

    incIngredient = (type) => {
        const newIngredient = { ...this.state.ingredients };
        newIngredient[type]++;
        const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
        this.setState({ ingredients: newIngredient, totalPrice: newPrice });
    };
    decIngredient = (type) => {
        const newIngredient = { ...this.state.ingredients };
        if (newIngredient[type] > 0) {
            newIngredient[type]--;
        }
        const newPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
        this.setState({ ingredients: newIngredient, totalPrice: newPrice });
    };

    render() {
        const disIngredients = { ...this.state.ingredients };
        for (const key in disIngredients) {
            disIngredients[key] = disIngredients[key] <= 0;
        }

        return (
            <div>
                {this.state.isLoading ? (
                    <Spinner />
                ) : (
                    <Burger ingredients={this.state.ingredients}></Burger>
                )}
                <BurgerControls
                    totalPrice={this.state.totalPrice}
                    disIngredients={disIngredients}
                    incIngredient={this.incIngredient}
                    decIngredient={this.decIngredient}
                    ingredientNames={INGREDIENT_NAMES}
                    showConfirmOrder={this.showConfirmOrder}
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
                            ingredients={this.state.ingredients}
                            totalPrice={this.state.totalPrice}
                            onCancel={this.hideConfirmOrder}
                            onContinue={this.proceedToOrderPage}
                        ></OrderSummary>
                    )}
                </Modal>
            </div>
        );
    }
}
