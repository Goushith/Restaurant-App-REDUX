import { createStore,combineReducers,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { restlistreducer } from "./reducers/restreducer";

const reducers=combineReducers({restreducer:restlistreducer})
const middleware=[thunk]

//store creation

const store = createStore(reducers,applyMiddleware(...middleware))

export default store