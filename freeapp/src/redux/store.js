import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { User } from "./reducers/User";
import { Common } from "./reducers/Common";

const rootReducer = combineReducers({
    user: User,
    common: Common
});

export const initStore = createStore(rootReducer, applyMiddleware(thunk));