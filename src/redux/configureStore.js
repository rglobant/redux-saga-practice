import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";
import { persistStore, persistReducer } from "redux-persist";
import { composeWithDevTools } from "redux-devtools-extension";
import storage from "redux-persist/lib/storage";
import rootSaga from "../sagas/index";
import rootReducers from "./reducers/rootReducers";


/* Saga */
const enhancers = [];
const sagaMiddleware = createSagaMiddleware({});

const middlewares = [];

middlewares.push(sagaMiddleware);
enhancers.push(applyMiddleware(...middlewares));

if (process.env.NODE_ENV === "development") {
  // this is for debugging redux
  middlewares.push(
    createLogger({
      collapsed: (getState, action, logEntry) => !logEntry.error,
    })
  );
}

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducers);

const store = createStore(
  persistedReducer,
  {},
  composeWithDevTools(applyMiddleware(...middlewares))
);

const persistor = persistStore(store);

/* Run saga */

sagaMiddleware.run(rootSaga);

export { store, persistor };