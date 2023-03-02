import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartState: false,
    itemCart: [],
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setOpenCart: (state, action) => {
            state.cartState = action.payload.cartState;
        },
        setCloseCart: (state, action) => {
            state.cartState = action.payload.cartState;
        },
        setAddItemCart: (state, action) => {
            const itemIndex = state.itemCart.findIndex((item) => item.id === action.payload.id)

            if(itemIndex >= 0) {
                state.itemCart[itemIndex].cartQuantity += 1;
            } else {
                const temp = {...action.payload, cartQuantity: 1}
                state.itemCart = [...state.itemCart, temp];
            }
        }
    }
})

export const { setOpenCart, setCloseCart, setAddItemCart } = cartSlice.actions;

export default cartSlice.reducer