import { applyMiddleware, compose, createStore, combineReducers } from "redux";
import userReducer from "./reducers/userReducer";
import gameReducer from "./reducers/gameReducer";
import signupMiddleware from "../middlewares/signupMiddleware";
import debugMiddleware from "../middlewares/debugMiddleware";
import loginMiddleware from "../middlewares/loginMiddleware";
import gameMiddleware from "../middlewares/gameMiddleware";

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
    applyMiddleware(
      debugMiddleware,
      loginMiddleware,
      signupMiddleware,
      gameMiddleware
    )
  )
);

export default store;
