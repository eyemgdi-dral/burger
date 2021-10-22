const initialState = {
    orders: [],
    isLoading: false,
    error: {},
};
const reducerOrder = (state = initialState, action) => {
    if (action.type === "GET_ORDERS_START") {
        return {
            ...state,
            isLoading: true,
        };
    } else if (action.type === "GET_ORDERS_SUCCESS") {
        return {
            ...state,
            orders: Object.entries(action.orders),
            isLoading: false,
        };
    } else if (action.type === "GET_ORDERS_ERROR") {
        return {
            ...state,
            isLoading: false,
            error: action.error,
        };
    }
    return state;
};
export default reducerOrder;
