const initialState = {
    ingredients: {
        salad: 0,
        cheese: 0,
        bacon: 0,
        meat: 0,
    },
    totalPrice: 1000,
};

const INGREDIENT_PRICES = { salad: 150, cheese: 250, bacon: 800, meat: 1500 };
const INGREDIENT_NAMES = {
    bacon: "Гахайн мах",
    meat: "Үхрийн мах",
    salad: "Салад",
    cheese: "Бяслага",
};
const reducerBurger = (state = initialState, action) => {
    console.log("action", action);

    if (action.type === "INC_INGREDIENT") {
        return {
            ingredients: {
                ...state.ingredients,
                [action.ingredientName]:
                    state.ingredients[action.ingredientName] + 1,
            },
            totalPrice:
                state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
        };
    } else if (action.type === "DEC_INGREDIENT") {
        return {
            ingredients: {
                ...state.ingredients,
                [action.ingredientName]:
                    state.ingredients[action.ingredientName] - 1,
            },
            totalPrice:
                state.totalPrice - INGREDIENT_PRICES[action.ingredientName],
        };
    }
    return { ...state };
};
export default reducerBurger;
