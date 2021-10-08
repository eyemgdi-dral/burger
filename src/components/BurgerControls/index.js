import { BurgerControl } from "../BurgerControl";
export const BurgerControls = (props) => {
  return (
    <div>
      <h1>Total: {props.totalPrice}</h1>
      {Object.keys(props.ingredientNames).map((control, index) => {
        return (
          <BurgerControl
            key={index}
            ingredientNames={props.ingredientNames}
            incIngredient={props.incIngredient}
            decIngredient={props.decIngredient}
            disIngredients={props.disIngredients}
            type={control}
          ></BurgerControl>
        );
      })}
      <button onClick={props.showConfirmOrder}>Order</button>
    </div>
  );
};
