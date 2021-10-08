import { Component } from "react";
import { Modal } from "../../components/General/Modal";
import { Burger } from "../../components/Burger";
import { BurgerControls } from "../../components/BurgerControls";
import { OrderSummary } from "../../components/OrderSummary";
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
    };
  }

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
        <Burger ingredients={this.state.ingredients}></Burger>
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
          <OrderSummary
            ingredientNames={INGREDIENT_NAMES}
            ingredients={this.state.ingredients}
            totalPrice={this.state.totalPrice}
          ></OrderSummary>
        </Modal>
      </div>
    );
  }
}
