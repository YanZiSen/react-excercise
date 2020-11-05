import rootReducer from '../reducers'
import {applyMiddleware, createStore} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {createLogger} from 'redux-logger'

const logMiddleware = createLogger();

function configureStore (preloadState) {
    return createStore(
        rootReducer,
        preloadState,
        applyMiddleware(thunkMiddleware, logMiddleware)
    );
}

const store = configureStore();
export default store;