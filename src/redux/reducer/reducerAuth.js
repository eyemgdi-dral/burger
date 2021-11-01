const initialState = {
    loginPage: {
        isLoading: false,
        finished: false,
        isAuth: false,
        user: {},
    },
};
const reducerAuth = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN_START":
            return {
                ...state,
                isLoading: true,
            };

        case "LOGIN_SUCCESS":
            return {
                ...state,
                user: action.response.user,
                isLoading: false,
                finished: true,
            };

        case "LOGIN_ERROR":
            return {
                ...state,
                isLoading: false,
                finished: true,
                error: action.error,
            };

        default:
            return state;
    }
};
export default reducerAuth;
