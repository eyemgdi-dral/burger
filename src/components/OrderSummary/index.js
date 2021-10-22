import { connect } from "react-redux";
import { Button } from "../General/Button";

const OrderSummary = ({
    onContinue,
    onCancel,
    ingredientNames,
    ingredients,
    totalPrice,
}) => {
    return (
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
};
const mapStateToProps = (state) => {
    return {
        ingredientNames: state.reducerBurger.ingredientNames,
        ingredients: state.reducerBurger.ingredients,
        totalPrice: state.reducerBurger.totalPrice,
    };
};
export default connect(mapStateToProps)(OrderSummary);
