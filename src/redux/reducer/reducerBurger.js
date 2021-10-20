const initialState = {
    ingredients: {
        salad: 0,
        cheese: 0,
        bacon: 0,
        meat: 0,
    },
    purchasing: false,
    totalPrice: 1000,
    ingredientNames: {
        bacon: "Гахайн мах",
        meat: "Үхрийн мах",
        salad: "Салад",
        cheese: "Бяслага",
    },
};

const INGREDIENT_PRICES = { salad: 150, cheese: 250, bacon: 800, meat: 1500 };

const reducerBurger = (state = initialState, action) => {
    console.log("action", action);

    if (action.type === "INC_INGREDIENT") {
        return {
            ...state,
            ingredients: {
                ...state.ingredients,
                [action.ingredientName]:
                    state.ingredients[action.ingredientName] + 1,
            },
            totalPrice:
                state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
            purchasing: true,
        };
    } else if (action.type === "DEC_INGREDIENT") {
        const newPrice =
            state.totalPrice - INGREDIENT_PRICES[action.ingredientName];
        return {
            ...state,
            ingredients: {
                ...state.ingredients,
                [action.ingredientName]:
                    state.ingredients[action.ingredientName] - 1,
            },
            totalPrice: newPrice,
            purchasing: newPrice > 1000,
        };
    }
    return { ...state };
};
export default reducerBurger;
