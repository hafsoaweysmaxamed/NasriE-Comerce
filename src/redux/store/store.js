import { configureStore,combineReducers} from "@reduxjs/toolkit";
import cartslice from "../reduce/cart"
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";


const persistConfig={
    key:"root",
    storage
}

const reducers=combineReducers({
    cart:cartslice
    


})
const persistReducers=persistReducer(persistConfig,reducers)

const store=configureStore({
    reducer:persistReducers
    


})


export default store