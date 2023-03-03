import { createSlice } from "@reduxjs/toolkit";
import toast from 'react-hot-toast';

const initialState = {
    cartState: false,
    itemCart: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [],
    cartTotalAmount: 0,
    cartTotalQuantity: 0,
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

                toast.success(`Item quantity increased`)
            } else {
                const temp = {...action.payload, cartQuantity: 1}
                state.itemCart = [...state.itemCart, temp];

                toast.success(`${action.payload.title} added to Cart`)
            }

            localStorage.setItem('cart', JSON.stringify(state.itemCart))
        },

        setRemoveItemCart: (state, action) => {
            state.itemCart = state.itemCart.filter(item => item.id !== action.payload.id)

            localStorage.setItem('cart', JSON.stringify(state.itemCart))

            toast.success(`${action.payload.title} removed from Cart`)
        },

        setIncreaseItemQTY: (state, action) => {
            const itemIndex = state.itemCart.findIndex((item) => item.id === action.payload.id)

            if(itemIndex >= 0) {
                state.itemCart[itemIndex].cartQuantity += 1;

                toast.success(`Item quantity increased`)
            } 

            localStorage.setItem('cart', JSON.stringify(state.itemCart))
        },

        setDecreaseItemQTY: (state, action) => {
            const itemIndex = state.itemCart.findIndex((item) => item.id === action.payload.id)

            if(state.itemCart[itemIndex].cartQuantity > 1) {
                state.itemCart[itemIndex].cartQuantity -= 1;

                toast.success(`Item quantity decreased`)
            } 

            localStorage.setItem('cart', JSON.stringify(state.itemCart))
        },

        setClearCartItems: (state, action) => {
            state.itemCart = [];

            toast.success(`Cart cleared`)

            localStorage.setItem('cart', JSON.stringify(state.itemCart))
        },
        
        setGetTotal: (state, action) => {
            let { totalAmount, totalQuantity } = state.itemCart.reduce((cartTotal, cartItem) => {
                const { price, cartQuantity } = cartItem;
                const totalPrice = price * cartQuantity;

                cartTotal.totalAmount += totalPrice;
                cartTotal.totalQuantity += cartQuantity;

                return cartTotal
            }, {
                totalAmount: 0,
                totalQuantity: 0,
            });

            state.cartTotalAmount = totalAmount;
            state.cartTotalQuantity = totalQuantity;
        },
    }
})

export const {  

    setOpenCart, 
    setCloseCart, 
    setAddItemCart, 
    setRemoveItemCart,
    setIncreaseItemQTY,
    setDecreaseItemQTY,
    setClearCartItems,
    setGetTotal,

} = cartSlice.actions;

export default cartSlice.reducer