import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import reducer from "./reducers";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

const middleware = [thunk];

if (process.env.NODE_ENV !== "production") {
  middleware.push(createLogger());
}

let Store = createStore(persistedReducer, applyMiddleware(...middleware));
let Persistor = persistStore(Store);

export {Store, Persistor}
