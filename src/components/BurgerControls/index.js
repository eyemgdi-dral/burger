import { connect } from "react-redux";
import BurgerControl from "../BurgerControl";
const BurgerControls = (props) => {
    const disIngredients = { ...props.ingredients };
    for (const key in disIngredients) {
        disIngredients[key] = disIngredients[key] <= 0;
    }
    return (
        <div>
            <h1>Total: {props.totalPrice}</h1>
            {Object.keys(props.ingredientNames).map((control, index) => {
                return (
                    <BurgerControl
                        key={index}
                        disIngredients={disIngredients}
                        type={control}
                    ></BurgerControl>
                );
            })}
            <button
                onClick={props.showConfirmOrder}
                disabled={!props.purchasing}
            >
                Order
            </button>
        </div>
    );
};

const mapState = (state) => {
    return {
        ingredients: state.reducerBurger.ingredients,
        totalPrice: state.reducerBurger.totalPrice,
        ingredientNames: state.reducerBurger.ingredientNames,
        purchasing: state.reducerBurger.purchasing,
    };
};
export default connect(mapState)(BurgerControls);
