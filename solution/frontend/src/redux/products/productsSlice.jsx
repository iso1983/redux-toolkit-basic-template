import { createSlice } from "@reduxjs/toolkit";
import { fetcProductsThunk } from "./productsThunk";

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
  /* createAsyncThunk generates promise lifecycle action types using this string as a prefix:
    pending: products/getProducts/pending
    fulfilled: products/getProducts/fulfilled
    rejected: products/getProducts/rejected
  */
  //redux thunk has different states, like fulfilled,pending,rejected and we define the built in key extraReducers that is a function that takes in a parameter that we append addCase to it and define inside the states of thunk, if thunk is fulfilled do something
  extraReducers: (builder) => {
    builder
      .addCase(fetcProductsThunk.pending, (state, action) => {
        state.loading = true;
      })
      //if data is fetched, fulfilled is run
      .addCase(fetcProductsThunk.fulfilled, (state, action) => {
        state.products = action.payload.data;
        state.loading = false;
      })
      .addCase(fetcProductsThunk.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

//Add reducer functions below if you have some
export const { setLoading } = productsSlice.actions;
export default productsSlice.reducer;
