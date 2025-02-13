const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    CartItems: [],
    ItemCount: 0,
    CartTotalAmt: 0
}

const cartSlice=createSlice({
    name: "cart",
    initialState,
    reducers: {
        clearCart: (state) => {
            state.CartItems = []
        },

        addItem: (state, action) => {
            const newItem = { ...action.payload, qty:1 }
            state.CartItems = [...state.CartItems, newItem]
            state.ItemCount = state.CartItems.length
        },

        increQty: (state, { payload }) => {
            const crtItem = state.CartItems.find((item) => item._id === payload.iid)
            crtItem.qty += 1
        },

        decreQty: (state, { payload }) => {
            const crtItem = state.CartItems.find((item) => item._id === payload.iid)
            crtItem.qty -= 1
        },
        calculateTotal: (state) => {
            let totalQty = 0
            let totalamt = 0
            state.CartItems.forEach((item) => {
                totalQty += item.qty
                totalamt += item.qty * item.FoodPrice
            })
            state.CartTotalAmt = totalamt
        }  
    }
})

export const { addItem, clearCart, increQty, decreQty, calculateTotal } = cartSlice.actions
export default cartSlice.reducer