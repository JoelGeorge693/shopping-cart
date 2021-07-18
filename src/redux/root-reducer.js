import { combineReducers } from "redux";
import BasketReducer from "./basket/basket.reducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["basket"],
};

const rootReducer = combineReducers({
    basket: BasketReducer,
});

export default persistReducer(persistConfig, rootReducer);
