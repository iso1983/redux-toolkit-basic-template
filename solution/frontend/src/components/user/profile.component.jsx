import { useSelector } from "react-redux";

export const Profile = () => {
  const userSelector = useSelector((state) => state.user);
  return (
    <div>
      <p style={{ textAlign: "center" }}>Username: {userSelector.name}</p>
      <p style={{ textAlign: "center" }}>Email:{userSelector.email} </p>
    </div>
  );
};
