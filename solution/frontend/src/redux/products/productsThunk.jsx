import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//Thunk is used for making async API calls

// the first parameter in createAsyncThunk is the name of the thunk,you can call it what ever you want,the naming convention is usually the slice this thunk belongs to ,in this case we create this thunk for the "products" slice so we do "products/"" then the action name ,we call it just "getProducts", the second parameter is a callback function that can take some parameters if you want to pass any.
export const fetcProductsThunk = createAsyncThunk(
  "products/getProducts",
  async (parameterYouPassFromDispatch, { rejectWithValue }) => {
    try {
      return await axios.get("http://localhost:5000/get_products", {
        responseType: "json",
      });
    } catch (e) {
      console.log(e);
      return rejectWithValue("Ops something went wrong");
    }
  }
);
