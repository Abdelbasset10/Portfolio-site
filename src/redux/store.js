import { createStore, applyMiddleware , compose } from "redux";
import thunk from 'redux-thunk'
import themeReducer from "./themeReducer";

const store = createStore(themeReducer,compose(applyMiddleware(thunk)))

export default store

