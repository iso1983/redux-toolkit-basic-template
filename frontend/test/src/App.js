import SignIn from "./pages/signin/sign_in.component";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import Header from "./components/header/header.component";
import Shop from "./pages/shop/shop.component";
import React from "react";
import { Profile } from "./components/user/profile.component";
import { useDispatch } from "react-redux";
import { fetchProductsThunk } from "./store/products/productsThunk";
import { setLoading } from "./store/products/productsSlice";

function App() {
  const dispatch = useDispatch();
  // call setLoading reducer from productsSlice which sets the loading state variable to true,once thunk gets data from API, loading variable is set to false. This is like a spinner, a message to the user before products load
  dispatch(setLoading(true));
  // run the fetchProductsThunk in the very beginning of the application using dispatch function of react-redux library, thunk will make an async call and when the data is received from an API,server, the store will be updated and all the components who uses that data will be re-rendered
  dispatch(fetchProductsThunk());
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
