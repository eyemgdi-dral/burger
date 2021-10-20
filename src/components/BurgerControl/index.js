import { connect } from "react-redux";
import {
    decIngredient,
    incIngredient,
} from "../../redux/actions/actionsBurger";

const BurgerControl = (props) => (
    <div>
        {props.ingredientNames[props.type]}
        <button onClick={() => props.incIngredient(props.type)}>+</button>
        <button
            onClick={() => props.decIngredient(props.type)}
            disabled={props.disIngredients[props.type]}
        >
            -
        </button>
    </div>
);

const mapStateToProp = (state) => {
    return {
        ingredientNames: state.ingredientNames,
    };
};
const mapDispatchToProp = (dispatch) => {
    return {
        incIngredient: (ingredientName) =>
            dispatch(incIngredient(ingredientName)),
        decIngredient: (ingredientName) =>
            dispatch(decIngredient(ingredientName)),
    };
};

export default connect(mapStateToProp, mapDispatchToProp)(BurgerControl);
