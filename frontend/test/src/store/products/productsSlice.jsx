import { createSlice } from "@reduxjs/toolkit";
import { fetchProductsThunk } from "./productsThunk";

const initialState = {
  products: [],
  loading: false,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
  //redux thunk has different states, like fulfilled,pending,rejected and we define the built in key extraReducers that is a function that takes in a parameter that we append addCase to it and define inside the states of thunk, if thunk is fulfilled do something
  extraReducers: (builder) => {
    //If thunk is still waiting to get the response from API,use pending state
    builder.addCase(fetchProductsThunk.pending, (state, action) => {
      state.loading = true;
    });
    // if thunk is successful ,this thunk is called
    builder.addCase(fetchProductsThunk.fulfilled, (state, action) => {
      console.log("fetch.fulfilled");
      state.products = action.payload.data;
      state.loading = false;
    });
    builder.addCase(fetchProductsThunk.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

// Add reducer functions below if you have some
export const {setLoading} = productsSlice.actions;
export default productsSlice.reducer;
