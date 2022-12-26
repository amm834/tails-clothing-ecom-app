import {compose, createStore, applyMiddleware} from "redux";
import {rootReducer} from "./root-reducer.js";
import logger from 'redux-logger'
import {persistReducer, persistStore} from "redux-persist";
import storage from 'redux-persist/lib/storage'

const middlewares = [process.env.NODE_ENV === 'development' && logger].filter(Boolean);

const composeEnhancer =
    (process.env.NODE_ENV !== 'production' &&
        window &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;


const composedEnhancers = composeEnhancer(applyMiddleware(...middlewares))

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['user',],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(
    persistedReducer,
    undefined,
    composedEnhancers
);

export const persistor = persistStore(store);