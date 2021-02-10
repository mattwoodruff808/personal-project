import {createStore, combineReducers, applyMiddleware} from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import userReducer from './userReducer';
import recipeReducer from './recipeReducer';

const rootReducer = combineReducers({
    userReducer,
    recipeReducer
})

export default createStore(rootReducer, applyMiddleware(promiseMiddleware));