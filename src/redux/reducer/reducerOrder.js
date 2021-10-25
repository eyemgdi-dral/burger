const initialState = {
    orders: [],
    order: {},
    isLoading: false,
    error: {},
};
const reducerOrder = (state = initialState, action) => {
    if (
        action.type === "GET_ORDERS_START" ||
        action.type === "PROCEED_ORDER_START"
    ) {
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
    } else if (
        action.type === "GET_ORDERS_ERROR" ||
        action.type === "PROCEED_ORDER_ERROR"
    ) {
        return {
            ...state,
            isLoading: false,
            error: action.error,
        };
    } else if (action.type === "PROCEED_ORDER_SUCCESS") {
        return {
            ...state,
            isLoading: false,
        };
    }
    return state;
};
export default reducerOrder;
