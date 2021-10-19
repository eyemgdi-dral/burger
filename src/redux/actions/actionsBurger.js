export const incIngredient = (ingredientName) => {
    return { type: "INC_INGREDIENT", ingredientName };
};
export const decIngredient = (ingredientName) => {
    return { type: "DEC_INGREDIENT", ingredientName };
};
