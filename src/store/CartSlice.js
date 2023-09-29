import { createSlice } from '@reduxjs/toolkit'

const CartSlice = createSlice({
    name: 'Cart',
    initialState: [],
    reducers: {
        add(state,action){
            state.push(action.payload)
        },
        deleteFromCart(state,action){
            return state.filter(item=>item.id!==action.payload);
        },
    }
});

export const {add,deleteFromCart} = CartSlice.actions;
export default CartSlice.reducer;
