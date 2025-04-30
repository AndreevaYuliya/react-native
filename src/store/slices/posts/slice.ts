import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {PostInfo} from './types';

export type PostsStateType = {
  posts: PostInfo[];
};

const initialState: PostsStateType = {
  posts: [
    {
      id: 1,
      title: 'Post 1',
      description: 'This is post 1',
      image:
        'https://images.unsplash.com/photo-1420593248178-d88870618ca0?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      author: {
        id: 1,
        name: 'Yuliia',
        avatar:
          'https://static.vecteezy.com/system/resources/thumbnails/015/410/594/small_2x/elegant-pretty-woman-in-business-suit-with-badge-woman-business-avatar-profile-picture-illustration-isolated-vector.jpg',
      },
    },
    {
      id: 2,
      title: 'Post 2',
      description: 'This is post 2',
      image: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg',
      author: {
        id: 2,
        name: 'Slavik',
        avatar:
          'https://www.shutterstock.com/shutterstock/photos/2107967969/display_1500/stock-vector-young-smiling-man-adam-avatar-d-vector-people-character-illustration-cartoon-minimal-style-2107967969.jpg',
      },
    },
  ],
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    deletePost: (state, action: PayloadAction<number>) => {
      state.posts = state.posts.filter(item => item.id !== action.payload);
    },
    editPost: (state, action: PayloadAction<PostInfo>) => {
      state.posts = state.posts.map(item => {
        if (item.id === action.payload.id) {
          return action.payload;
        }

        return item;
      });
    },
  },
});

export const {deletePost, editPost} = postsSlice.actions;

export default postsSlice.reducer;
