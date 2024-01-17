import { createSlice } from "@reduxjs/toolkit";

export const nexSlice = createSlice({
  name: "nex",
  initialState: {
    user_id: 0,
    UserInfo: null,
  },
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    addUser: (state, action) => {
      state.UserInfo = action.payload;
      console.log("userinfo", state.UserInfo.name);
    },
    removeUser: (state) => {
      state.UserInfo = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, addUser, removeUser } =
  nexSlice.actions;

export default nexSlice.reducer;
