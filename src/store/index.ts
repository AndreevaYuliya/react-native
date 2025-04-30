import {configureStore} from '@reduxjs/toolkit';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';

import authReducer from './slices/auth/slice';
import postsReducer from './slices/posts/slice';
import profileReducer from './slices/profile/slice';
import changeBackgroundColorReducer from './slices/changingStyles/slice';
import productsReducer from './slices/products/slice';
import shoppingCartReducer from './slices/shoppingCart/slice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    posts: postsReducer,
    profile: profileReducer,
    changeBackgroundColor: changeBackgroundColorReducer,
    products: productsReducer,
    cart: shoppingCartReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export type RootStateType = ReturnType<typeof store.getState>;
export type AppDispatchType = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatchType>();
