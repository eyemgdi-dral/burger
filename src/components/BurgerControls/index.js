import { connect } from "react-redux";
import {
    decIngredient,
    incIngredient,
} from "../../redux/actions/actionsBurger";
import { BurgerControl } from "../BurgerControl";
const BurgerControls = (props) => {
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
            <button
                onClick={props.showConfirmOrder}
                disabled={!props.purchasing}
            >
                Order
            </button>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        ingredientNames: state.ingredientNames,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        incIngredient: (ingredientName) =>
            dispatch(incIngredient(ingredientName)),
        decIngredient: (ingredientName) =>
            dispatch(decIngredient(ingredientName)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BurgerControls);
