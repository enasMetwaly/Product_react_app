import { configureStore } from "@reduxjs/toolkit";
import counter from "./slices/counter";
import cartReducer from './slices/cartSlice';
import language from './slices/language';
import theme from './slices/themeSlice';


export default configureStore({
    reducer: {
        counter,
        cart: cartReducer,
        language,
        theme,
        
    }
})

// ACTION REDUCER STORE