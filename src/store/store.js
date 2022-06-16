import { applyMiddleware, compose, createStore } from 'redux';
import reducer from './reducer';
import { debugMiddleware, loginMiddleware, signupMiddleware } from '../middleware/middleware';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancers = composeEnhancers(applyMiddleware(debugMiddleware, loginMiddleware, signupMiddleware));

const store = createStore(reducer, enhancers);

export default store;


