// redux toolkit uses immer library that takes care of updating values immutably so we do not have to worry about destructuring the previous values of the array and append new value and return the new array, immerse does that
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: null,
  email: null,
};

export const userSlice = createSlice({
  name: "user",
  //   initialState is the initial value of the state
  initialState,
  //A reducer is used to update a state, just call its functions to update the state,eg ,you wanna update user email, call reducer,we can not change the redux store directly ,we need to use functions defined in the reducer,call "login" using the "useDispatch" hook from a component when user needs to update username,email.
  reducers: {
    login: (state, action) => {
      console.log("from userslice", action.payload);
      const { name, email } = action.payload;
      state.name = name;
      state.email = email;
    },
    logout: (state, action) => {
      state.name = null;
      state.email = null;
    },
  },
});

// userSlice.actions contains all the reducer functions like login on the userSlice object
export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
