import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ProductsInfo} from './types';

export type ProductsStateType = {
  products: ProductsInfo[];
};

const initialState: ProductsStateType = {
  products: [
    {
      id: 1,
      title: 'Product 1',
      description: 'This is product 1',
      price: '100$',
      image:
        'https://images.unsplash.com/photo-1420593248178-d88870618ca0?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },

    {
      id: 2,
      title: 'Product 2',
      description: 'This is product 2',
      price: '200$',
      image: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg',
    },

    {
      id: 3,
      title: 'Product 3',
      description: 'This is product 3',
      price: '300$',
      image:
        'https://5.imimg.com/data5/SELLER/Default/2022/4/RM/PV/DY/11929731/nature-wallpaper-1000x1000.jpg',
    },

    {
      id: 4,
      title: 'Product 4',
      description: 'This is product 4',
      price: '400$',
      image:
        'https://images.pexels.com/photos/1666021/pexels-photo-1666021.jpeg',
    },

    {
      id: 5,
      title: 'Product 5',
      description: 'This is product 5',
      price: '500$',
      image:
        'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&h=130',
    },

    {
      id: 6,
      title: 'Product 6',
      description: 'This is product 6',
      price: '600$',
      image:
        'https://cdn.pixabay.com/photo/2019/03/05/12/51/blue-tailed-bee-eater-4036128_1280.jpg',
    },

    {
      id: 7,
      title: 'Product 7',
      description: 'This is product 7',
      price: '700$',
      image:
        'https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg',
    },
  ],
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    // addToCart: (state, action: PayloadAction<ProductsInfo>) => {
    //   //   state.products = state.products.push(action.payload.id);
    //   state.products.push(action.payload);
    // },
  },
});

export const {} = productsSlice.actions;

export default productsSlice.reducer;
