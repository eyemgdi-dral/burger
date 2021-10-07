import { BurgerControl } from "../BurgerControl";
export const BurgerControls = (props) => {
  const controls = {
    bacon: "Gahai",
    meat: "Uher",
    salad: "salad",
    cheese: "cheese",
  };
  return (
    <div>
      <h1>Total: {props.totalPrice}</h1>
      {Object.keys(controls).map((control, index) => {
        return (
          <BurgerControl
            keys={index}
            incIngredient={props.incIngredient}
            decIngredient={props.decIngredient}
            disIngredients={props.disIngredients}
            type={control}
          ></BurgerControl>
        );
      })}
      <button>Order</button>
    </div>
  );
};
