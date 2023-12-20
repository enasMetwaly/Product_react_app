// cartSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], // An array to hold the products in the cart, each with quantity
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    removeItem: (state, action) => {
    const itemIdToRemove = action.payload;
    state.items = state.items.filter(item => item.id !== itemIdToRemove)
    },

    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);

      if (existingItem) {
        // If the item already exists in the cart, increase its quantity by 1
        existingItem.quantity += 1;
      } else {
        // If the item doesn't exist in the cart, add it with a quantity of 1
        state.items.push({ ...newItem, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const itemIdToRemove = action.payload;
      const existingItem = state.items.find(item => item.id === itemIdToRemove);

      if (existingItem) {
        // If the item exists in the cart, decrease its quantity by 1
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
        } else {
          // If the quantity is 1, remove the item from the cart entirely
          state.items = state.items.filter(item => item.id !== itemIdToRemove);
        }
      }
    },
  },

  
  
  

});

export const { removeItem , addToCart, removeFromCart  } = cartSlice.actions;
export default cartSlice.reducer;
