export const OrderSummary = ({ ingredients, ingredientNames, totalPrice }) => (
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
    <button>Proceed</button>
  </div>
);
