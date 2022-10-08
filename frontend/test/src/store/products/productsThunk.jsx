import { createAsyncThunk } from "@reduxjs/toolkit";
import { getProducts } from "../../utils/api";

// Thunk is used for making async API calls 

// the first parameter in createAsyncThunk is the name of the thunk,you can call it what ever you want,the naming convention is usually the slice this thunk belongs to ,in this case we create this thunk for the "products" slice so we do "products/"" then the action name ,we call it just "fetch", the second parameter is a callback function that can take some parameters if you want to pass any.
export const fetchProductsThunk = createAsyncThunk("products/fetch", () => {
    console.log("From thunk")
  return getProducts();
});