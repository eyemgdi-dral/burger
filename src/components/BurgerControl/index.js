export const BurgerControl = (props) => (
  <div>
    {props.type}
    <button onClick={() => props.incIngredient(props.type)}>+</button>
    <button
      onClick={() => props.decIngredient(props.type)}
      disabled={props.disIngredients[props.type]}
    >
      -
    </button>
  </div>
);
