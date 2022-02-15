import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./pages/App";
import reportWebVitals from "./reportWebVitals";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { Provider } from "react-redux";
import reducerBurger from "./redux/reducer/reducerBurger";
import reducerOrder from "./redux/reducer/reducerOrder";
import reducerAuth from "./redux/reducer/reducerAuth";
import thunk from "redux-thunk";

const logger = (store) => {
    return (next) => {
        return (action) => {
            console.log("Log => dispatching ", action);
            console.log("Log => current state before ", store.getState());
            const result = next(action);
            console.log("Log => current state after ", store.getState());
            return result;
        };
    };
};

const reducers = combineReducers({ reducerBurger, reducerOrder, reducerAuth });
const middleWares = [logger, thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(...middleWares))
);

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </React.StrictMode>
    </Provider>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
