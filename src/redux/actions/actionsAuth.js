import axios from "../../api/axiosInstance";

export const login = (user) => {
    return function (dispatch) {
        dispatch(loginStart);

        axios
            .post("/login.json", user)
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
    return function (dispatch) {
        dispatch(signupStart);
        axios
            .post("/signup.json", user)
            .then((response) => {
                dispatch(signupSuccess(response));
            })
            .catch((error) => {
                dispatch(signupError(error));
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
