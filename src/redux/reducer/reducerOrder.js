const initialState = {
    orders: [],
    isLoading: false,
    error: {},
    newOrder: {
        isLoading: false,
        finished: false,
        order: {},
        error: {},
    },
};
const reducerOrder = (state = initialState, action) => {
    switch (action.type) {
        case "GET_ORDERS_START":
            return {
                ...state,
                isLoading: true,
            };

        case "PROCEED_ORDER_START":
            return {
                ...state,
                newOrder: {
                    ...state.newOrder,
                    isLoading: true,
                    finished: false,
                },
            };

        case "GET_ORDERS_SUCCESS":
            return {
                ...state,
                orders: Object.entries(action.orders),
                isLoading: false,
            };

        case "PROCEED_ORDER_SUCCESS":
            return {
                ...state,
                newOrder: {
                    ...state.newOrder,
                    isLoading: false,
                    finished: true,
                },
            };

        case "GET_ORDERS_ERROR":
            return {
                ...state,
                isLoading: false,
                error: action.error,
            };

        case "PROCEED_ORDER_ERROR":
            return {
                ...state,
                newOrder: {
                    ...state.newOrder,
                    isLoading: false,
                    finished: true,
                    error: action.error,
                },
            };

        default:
            return state;
    }
};
export default reducerOrder;
