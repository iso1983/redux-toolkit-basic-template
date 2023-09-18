import { useSelector } from "react-redux";

export const Profile = () => {
  // get the user slice/ user data, redux store holds the entire application state,inside the store you have different slices , a slice is a different part of a store,for example userSlice is a part of redux store that contains all the relevant state to the user itself so instead of getting everything from redux store we get a slice of it,in this case below "userSlice"
  const userSelector = useSelector((state) => state.user);
  return (
    <div>
      <p style={{ textAlign: "center" }}>Username: {userSelector.name}</p>
      <p style={{ textAlign: "center" }}>Email: {userSelector.email}</p>
    </div>
  );
};
