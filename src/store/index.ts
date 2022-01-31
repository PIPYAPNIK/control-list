import { applyMiddleware, compose, createStore } from "redux";
import listReducer from "./listReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(listReducer, composeEnhancers(applyMiddleware()));
