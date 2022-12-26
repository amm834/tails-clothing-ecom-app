import {compose, createStore, applyMiddleware} from "redux";
import {rootReducer} from "./root-reducer.js";
import logger from 'redux-logger'

const middlewares = [
    logger,
]

const composedMiddlewares = compose(applyMiddleware(...middlewares))

export const store = createStore(rootReducer, undefined, composedMiddlewares)