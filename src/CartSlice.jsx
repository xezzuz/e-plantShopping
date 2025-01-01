import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    // Reducer to add an item to the cart
    addItem: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find((cartItem) => cartItem.name === item.name);

      if (existingItem) {
        existingItem.quantity += 1; // If item exists, increment its quantity
      } else {
        state.items.push({ ...item, quantity: 1 }); // Otherwise, add it to the cart with quantity 1
      }
    },

    // Reducer to remove an item from the cart
    removeItem: (state, action) => {
      const itemName = action.payload;
      state.items = state.items.filter((item) => item.name !== itemName);
    },

    // Reducer to update the quantity of an item in the cart
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const existingItem = state.items.find((cartItem) => cartItem.name === name);

      if (existingItem) {
        existingItem.quantity = quantity;
      }
    },
  },
});

// Exporting actions for use in components
export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

// Exporting the reducer for use in store.js
export default CartSlice.reducer;
