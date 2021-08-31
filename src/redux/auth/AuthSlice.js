import { createSlice } from "@reduxjs/toolkit";
import * as authOperations from "./authOperations";

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [authOperations.registerUser.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.logOut.fulfilled](state) {
      state = initialState;
    },
    [authOperations.getUserInfo.fulfilled](state, action) {
      console.log(action);
      state.user = { ...action.payload };
      state.isLoggedIn = true;
    },
  },
});

export default authSlice.reducer;
