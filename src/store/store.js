import { applyMiddleware, compose, createStore, combineReducers } from "redux";
import userReducer from "./reducers/userReducer";
import gameReducer from "./reducers/gameReducer";
import {
  debugMiddleware,
  loginMiddleware,
  signupMiddleware,
} from "../middleware/middleware";

// create system to allow redux-dev-tools to work properly
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// merge reducers
const rootReducer = combineReducers({
  user: userReducer,
  game: gameReducer,
});

const store = createStore(
  rootReducer, // reducers
  composeEnhancers(
    // middlewares
    applyMiddleware(debugMiddleware, loginMiddleware, signupMiddleware)
  )
);

export default store;
