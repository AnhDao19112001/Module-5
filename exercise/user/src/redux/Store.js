import {applyMiddleware, createStore} from "redux";
import rootSaga from "../saga/UserSaga";
import rootReducer from "./Reducer";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;