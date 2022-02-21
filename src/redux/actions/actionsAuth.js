// import axios from "../../api/axiosInstance";
import axiosAuth from "../../api/axiosAuth";
import constants from "../../constants/common.json";

export const login = (user) => {
    return function (dispatch) {
        dispatch(loginStart());
        user = {
            ...user,
            returnSecureToken: true,
        };

        axiosAuth
            .post("/accounts:signInWithPassword?key=" + constants.api.key, user)
            .then((response) => {
                dispatch(loginSuccess(response));
            })
            .catch((error) => {
                dispatch(loginError(error));
            });
    };
};

export const loginStart = () => {
    return {
        type: "LOGIN_START",
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

export const signup = (user) => {
    var user = {
        ...user,
        returnSecureToken: true,
    };
    return function (dispatch) {
        dispatch(signupStart());
        axiosAuth
            .post("/accounts:signUp?key=" + constants.api.key, user)
            .then((response) => {
                console.log("=>", response);
                dispatch(signupSuccess(response));
            })
            .catch((error) => {
                console.log("error", error.response.data.error.message);
                dispatch(
                    signupError({ message: error.response.data.error.message })
                );
            });
    };
};

export const signupStart = () => {
    return {
        type: "SIGNUP_START",
    };
};

export const signupSuccess = (response) => {
    return {
        type: "SIGNUP_SUCCESS",
        response,
    };
};

export const signupError = (error) => {
    return {
        type: "SIGNUP_ERROR",
        error,
    };
};

export const clearError = () => {
    return {
        type: "CLEAR_ERROR",
    };
};

export const logout = () => {
    return {
        type: "LOGOUT",
    };
};
