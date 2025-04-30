import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState = {
  backgroundColor: '#81d4fa',
};

export const changingStylesSlise = createSlice({
  name: 'changingStyles',
  initialState,
  reducers: {
    changeBackgroundColor: (state, action: PayloadAction<string>) => {
      state.backgroundColor = action.payload;
    },
  },
});

export const {changeBackgroundColor} = changingStylesSlise.actions;

export default changingStylesSlise.reducer;
