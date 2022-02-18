import { createStore, applyMiddleware } from "redux";
import rootReducer from '../reducer/index'
import createSagaMiddleware from "@redux-saga/core";
import { composeWithDevTools } from 'redux-devtools-extension';
import rootSaga from "../middleware";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

export type ReducerType = ReturnType<typeof rootReducer>;
export default store;