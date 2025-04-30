import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ProductsInfo} from '../products/types';

type ShoppingCartState = {
  cart: ProductsInfo[];
};

const initialState: ShoppingCartState = {
  cart: [],
};

export const shoppingCartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ProductsInfo>) => {
      state.cart.push(action.payload);

      // state.cart = [...state.cart, action.payload]
    },
    deleteProduct: (state, action: PayloadAction<number>) => {
      state.cart = state.cart.filter(prodId => prodId.id !== action.payload);
    },
    deleteAll: state => {
      state.cart = [];
    },
  },
});

export const {addToCart, deleteProduct, deleteAll} = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
