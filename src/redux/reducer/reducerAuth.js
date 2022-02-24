const initialState = {
    localId: "",
    token: "",
    refreshToken: "",
    isAuth: false,
    loginPage: {
        isLoading: false,
        finished: false,
        isAuth: false,
        error: null,
        user: {},
    },
    signupPage: {
        isLoading: false,
        finished: false,
        isAuth: false,
        error: null,
        user: {},
    },
};
const reducerAuth = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN_START":
            return {
                ...state,
                loginPage: {
                    ...state.loginPage,
                    isLoading: true,
                },
                signupPage: {
                    ...state.signupPage,
                },
            };

        case "LOGIN_SUCCESS":
            return {
                ...state,
                loginPage: {
                    ...state.loginPage,
                    isLoading: false,
                },
                signupPage: {
                    ...state.signupPage,
                },
                idToken: action.response.data.idToken,
                refreshToken: action.response.data.refreshToken,
                localId: action.response.data.localId,
                isAuth: true,
            };

        case "LOGIN_ERROR":
            return {
                ...state,
                loginPage: {
                    ...state.loginPage,
                    error: action.error,
                    isLoading: false,
                },
                signupPage: {
                    ...state.signupPage,
                },
            };

        case "SIGNUP_START":
            return {
                ...state,
                loginPage: {
                    ...state.loginPage,
                },
                signupPage: {
                    ...state.signupPage,
                    isLoading: true,
                },
            };

        case "SIGNUP_SUCCESS":
            return {
                ...state,
                loginPage: {
                    ...state.loginPage,
                },
                signupPage: {
                    ...state.signupPage,
                    isLoading: false,
                },
                idToken: action.response.data.idToken,
                refreshToken: action.response.data.refreshToken,
                localId: action.response.data.localId,
                isAuth: true,
            };

        case "SIGNUP_ERROR":
            return {
                ...state,
                loginPage: {
                    ...state.loginPage,
                },
                signupPage: {
                    ...state.signupPage,
                    error: action.error,
                    isLoading: false,
                },
            };

        case "CLEAR_ERROR":
            return {
                ...state,
                loginPage: {
                    ...state.loginPage,
                },
                signupPage: {
                    ...state.signupPage,
                    error: null,
                    isLoading: false,
                },
            };

        case "LOGOUT":
            return {
                ...state,
                localId: "",
                token: "",
                refreshToken: "",
                isAuth: false,
                loginPage: {
                    error: null,
                    isLoading: false,
                    ...state.loginPage,
                },
                signupPage: {
                    ...state.signupPage,
                    error: null,
                    isLoading: false,
                },
            };

        default:
            return state;
    }
};
export default reducerAuth;
