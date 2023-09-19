import axios from "axios";
import { login } from "./userSlice";

//Thunk is used for making async API calls

export function fetchUser(user) {
  return async function fetchUsersThunk(dispatch, getState) {
    try {
      console.log(user);
      const res = await axios.post("http://localhost:5000/signin", {
        email: user.email,
        name: user.name,
      });

      dispatch(login(res.data));
    } catch (e) {
      console.log(e);
      return null;
    }
  };
}
