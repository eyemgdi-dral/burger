import { Button } from "../General/Button";

export const OrderSummary = ({
  ingredients,
  ingredientNames,
  totalPrice,
  onCancel,
  onContinue,
}) => (
  <div>
    <div>Your ingredients</div>
    <h1>{totalPrice}</h1>
    <ul>
      {Object.keys(ingredients).map((ingr) => (
        <li key={ingr}>
          {ingredientNames[ingr]} - {ingredients[ingr]}
        </li>
      ))}
    </ul>
    <p>Do you want to proceed?</p>
    <Button clicked={onCancel} name="Cancel"></Button>
    <Button clicked={onContinue} name="Proceed"></Button>
  </div>
);
