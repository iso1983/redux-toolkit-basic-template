import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";
import productsReducer from "./products/productsSlice";

// configureStore allows us to configure the store by combining the reducers in the reducer key.Below we have defined 2 reducers, "user" and "products" ,you can give any name as the key.
export const store = configureStore({
  reducer: {
    user: userReducer,
    products: productsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
