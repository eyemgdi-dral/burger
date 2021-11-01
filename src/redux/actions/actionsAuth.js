import axios from "../../api/axiosInstance";

export const login = (user) => {
    return function (dispatch) {
        dispatch(loginStart);

        axios
            .post("/login.json")
            .then((response) => {
                dispatch(loginSuccess(response));
            })
            .catch((error) => {
                dispatch(loginError(error));
            });
    };
};

export const loginStart = (user) => {
    return {
        type: "LOGIN_START",
        user,
    };
};

export const loginSuccess = (response) => {
    return {
        type: "LOGIN_SUCCESS",
        response,
    };
};

export const loginError = (error) => {
    return {
        type: "LOGIN_ERROR",
        error,
    };
};
