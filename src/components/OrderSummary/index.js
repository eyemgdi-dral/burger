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
const a = (state) => {
    return {
        ingredientNames: state.ingredientNames,
        ingredients: state.ingredients,
        totalPrice: state.totalPrice,
    };
};
export default connect(a)(OrderSummary);
