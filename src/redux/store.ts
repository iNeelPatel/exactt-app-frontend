import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducers";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { WebStorage } from "redux-persist/es/types";
import { createLogger } from 'redux-logger'

const persistConfig: { key: string; storage: WebStorage } = {
    key: "root",
    storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

const middleware:any = [thunk];

if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger())
  }

let Store = createStore(persistedReducer, applyMiddleware(...middleware));
let Persistor = persistStore(Store);

export { Store, Persistor };
