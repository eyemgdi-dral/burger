import axios from "../../api/axiosInstance";

export const getOrders = (localId) => {
    return function (dispatch, getState) {
        dispatch(getOrdersStart());

        const token = getState().reducerAuth.idToken;
        axios
            .get(
                `/orders.json?auth=${token}&orderBy="localId"&equalTo="${localId}"`
            )
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
    return function (dispatch, getState) {
        dispatch(proceedOrderStart());
        const ord = {
            ...order,
            auth: getState().reducerAuth.idToken,
        };

        axios
            .post(`/orders.json?auth=${getState().reducerAuth.idToken}`, order)
            .then((response) => {
                alert("success");
                dispatch(proceedOrderSuccess(response));
            })
            .catch((error) => {
                dispatch(proceedOrderError(error));
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

export const getOrder = (id) => {
    return function (dispatch) {
        dispatch(getOrderStart());
        axios
            .get("/orders/" + id)
            .then((response) => {
                dispatch(getOrderSuccess(response));
            })
            .finally((response) => {
                dispatch(getOrderError(response));
            });
    };
};

export const getOrderStart = (response) => {
    return {
        type: "GET_ORDER_DETAIL",
    };
};

export const getOrderSuccess = (response) => {
    return {
        type: "GET_ORDER_SUCCESS_DETAIL",
        response,
    };
};

export const getOrderError = (response) => {
    return {
        type: "GET_ORDER_ERROR_DETAIL",
        response,
    };
};
