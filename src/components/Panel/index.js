export const Panel = (props) => {
  return (
    <div>
      {props.ingredients.salad}
      <button onClick={props.incSalad}>+ salad</button>
      <button onClick={props.decSalad}>- salad</button>
    </div>
  );
};
