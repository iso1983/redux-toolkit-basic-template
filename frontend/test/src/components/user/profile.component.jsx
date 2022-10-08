import { useSelector } from "react-redux";
import UserForm from "./userForm.component";

export const Profile = () => {
// get the user slice/ user data, redux store holds the entire application state,inside the store you have different slices , a slice is a different part of a store,for example userSlice is a part of redux store that contains all the relevant state to the user itself so instead of getting everything from redux store we get a slice of it,in this case below "userSlice"
  const userSlice = useSelector((state) => state.user);
  return (
    <div>
      {userSlice.id}
      <br />
      {userSlice.username}
      <br />
      {userSlice.email}
      <UserForm />
    </div>
  );
};