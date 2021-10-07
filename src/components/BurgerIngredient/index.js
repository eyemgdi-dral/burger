import css from "./style.module.css";
export const BurgerIngredient = (prop) => {
  if (prop.type !== "bread-top") {
    return <div className={prop.type}></div>;
  }
  return (
    <div className={prop.type}>
      <div className={css.seed}></div>
      <div className={`${css.seed} ${css.second}`}></div>
      <div className={`${css.seed} ${css.third}`}></div>
      <div className={`${css.seed} ${css.fourth}`}></div>
    </div>
  );
};
