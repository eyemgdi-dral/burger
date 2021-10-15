import React from "react";
import { withRouter } from "react-router";
import { BurgerIngredient } from "../../components/BurgerIngredient";
import "./style.css";
// export const BurgerBuilder = () => {
//   return <div>BurgerBuilder</div>;
// };
const Burger = (props) => {
    let content = [];
    const items = Object.entries(props.ingredients);
    if (items.length > 0) {
        content = [];
        items.forEach((el, idx) => {
            for (let i = 0; i < el[1]; i++) {
                content.push(
                    <BurgerIngredient key={`${idx}` + i} type={el[0]} />
                );
            }
        });
    }
    if (content.length <= 0) content = <p>choose ingredients...</p>;
    return (
        <div className="burger">
            <BurgerIngredient key="bread-top" type="bread-top" />
            {content}
            <BurgerIngredient key="bread-bottom" type="bread-bottom" />
        </div>
    );
};

export default withRouter(Burger);
