import { applyMiddleware, compose, createStore } from 'redux';
import reducer from './reducer';
import { authMiddleware, debugMiddleware, signupMiddleware } from '../middleware/middleware';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancers = composeEnhancers(applyMiddleware(debugMiddleware, authMiddleware, signupMiddleware));

const store = createStore(reducer, enhancers);

export default store;


