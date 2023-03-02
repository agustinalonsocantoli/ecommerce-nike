import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../feature/CartSlice";

export const store = configureStore({
    reducer: {
        cart: cartSlice,
    }
});