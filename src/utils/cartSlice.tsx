import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  id: string;
  name: string;
  price?: number;
  defaultPrice?: number;
  description?: string;
  imageId?: string;
  quantity: number;     // NEW
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // ADD ITEM → if exists increase qty else add new
    addItem: (state, action: PayloadAction<any>) => {
      const incoming = action.payload.card?.info || action.payload;
      const existingItem = state.items.find((i) => i.id === incoming.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          ...incoming,
          quantity: 1,
        });
      }
    },

    // INCREASE QUANTITY
    increaseQty: (state, action: PayloadAction<string>) => {
      const item = state.items.find((i) => i.id === action.payload);
      if (item) item.quantity += 1;
    },

    // DECREASE QUANTITY
    decreaseQty: (state, action: PayloadAction<string>) => {
      const item = state.items.find((i) => i.id === action.payload);

      if (!item) return;

      if (item.quantity > 1) {
        item.quantity -= 1;
      } else {
        // Remove item if qty becomes 0
        state.items = state.items.filter((i) => i.id !== action.payload);
      }
    },

    // CLEAR CART
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, increaseQty, decreaseQty, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
