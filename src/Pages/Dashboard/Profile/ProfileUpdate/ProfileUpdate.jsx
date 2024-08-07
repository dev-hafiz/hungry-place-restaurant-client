import { useLoaderData } from "react-router-dom";
import "./ProfileUpdate.css";

const ProfileUpdate = () => {
  const { _id } = useLoaderData();
  return (
    <div>
      <h1>Your ID : {_id}</h1>
    </div>
  );
};

export default ProfileUpdate;
