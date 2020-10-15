import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from  './reducers/index.js';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/index';

const sagaMiddlewear =  createSagaMiddleware();
const store = compose(
    applyMiddleware(sagaMiddlewear),
    window.devToolsExtension && window.devToolsExtension(),
)(createStore)(rootReducer);

sagaMiddlewear.run(rootSaga);

export default store;