import axios from "../../api/axiosInstance";
export const getOrders = () => {
    return function (dispatch) {
        dispatch(getOrdersStart());

        axios
            .get("/orders.json")
            .then(({ data }) => {
                //TIP: Extracting from response
                dispatch(getOrdersSuccess(data));
            })
            .catch((err) => {
                dispatch(getOrdersError(err));
            });
    };
};
export const getOrdersStart = () => {
    return {
        type: "GET_ORDERS_START",
    };
};
export const getOrdersSuccess = (orders) => {
    return {
        type: "GET_ORDERS_SUCCESS",
        orders,
    };
};
export const getOrdersError = (error) => {
    return {
        type: "GET_ORDERS_ERROR",
        error,
    };
};
