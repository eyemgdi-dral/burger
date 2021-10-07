import { Component } from "react";
import { Modal } from "../../components/General/Modal";
import { Burger } from "../../components/Burger";
import { BurgerControls } from "../../components/BurgerControls";
// export const BurgerBuilder = () => {
//   return <div>BurgerBuilder</div>;
// };
const INGREDIENT_PRICES = { salad: 150, cheese: 250, bacon: 800, meat: 1500 };
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
      someNumber: 0,
    };
  }

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
        ></BurgerControls>
        <Modal>
          <h1>Are u sure?</h1>
          <p>Details</p>
        </Modal>
      </div>
    );
  }
}
