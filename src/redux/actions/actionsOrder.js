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

export const proceedOrder = (order) => {
    return function (dispatch) {
        dispatch(proceedOrderStart());
        axios
            .post("/orders.json", order)
            .then((response) => {
                alert("success");
                dispatch(proceedOrderSuccess(response));
            })
            .catch((error) => {
                dispatch(proceedOrderSuccess(error));
            });
    };
};

export const proceedOrderStart = (order) => {
    return {
        type: "PROCEED_ORDER_START",
    };
};

export const proceedOrderSuccess = (response) => {
    return {
        type: "PROCEED_ORDER_SUCCESS",
        response,
    };
};

export const proceedOrderError = (error) => {
    return {
        type: "PROCEED_ORDER_ERROR",
        error,
    };
};
