import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {UserInfo} from './types';

export type ProfileStateType = {
  profile: UserInfo;
};

const initialState: ProfileStateType = {
  profile: {
    name: '',
    login: '',
    phone: '',
    email: '',
    dateOfBirth: '',
    password: '',
  },

  // profile: {
  //   name: 'Yuliia',
  //   phone: '(097)-473-1908',
  //   email: 'yuliia@gmail.com',
  //   dateOfBirth: '04.10.2000',
  // },
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    saveProfile: (state, action: PayloadAction<UserInfo>) => {
      state.profile = action.payload;
    },
    resetProfile: state => {
      state.profile = initialState.profile;
    },
  },
});

export const {saveProfile, resetProfile} = profileSlice.actions;

export default profileSlice.reducer;
