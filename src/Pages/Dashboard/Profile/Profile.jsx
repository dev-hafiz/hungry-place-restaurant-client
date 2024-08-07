import { useEffect, useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import "./Profile.css";
import { Link } from "react-router-dom";
const Profile = () => {
  const { user } = useAuth();

  const [profile, setProfile] = useState();
  console.log(profile);

  useEffect(() => {
    fetch(
      `https://hungry-place-restaurant-server.vercel.app/users/${user.email}`
    )
      .then((res) => res.json())
      .then((data) => setProfile(data));
  }, []);

  return (
    <div>
      <div className="profile-wrapper">
        <div className="profile-header">
          <img
            src="https://lh3.googleusercontent.com/a/ACg8ocIxEInVSXtpVDW6iJ6TtXaN92h4R9d7Q-fyTxsjJJQoTGA=s96-c"
            alt="User Profile"
            className="profile-img"
          />
          <div>
            <h3 className="user-name">{profile?.displayName}</h3>
            <p className="designation">{profile?.role}</p>
            <p className="address">Los Angeles, California, USA</p>
          </div>
        </div>
        <Link to={`/dashboard/profile/${profile?._id}`}>
          <button className="upate-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4 text-red-600 mr-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
              />
            </svg>
            Edit
          </button>
        </Link>
      </div>

      <div className="info-wrapper">
        <h3 className="title">Personal information</h3>

        <div className="flex items-center mb-7 gap-60">
          <div>
            <p className="level">Full Name</p>
            <p className="name">{profile?.displayName} </p>
          </div>
        </div>
        <div className="flex items-center mb-7 gap-32">
          <div>
            <p className="level">Email Address</p>
            <p className="name">{profile?.email} </p>
          </div>
          <div>
            <p className="level">Phone</p>
            <p className="name">(+880) 1786 xxx xxx</p>
          </div>
        </div>
        <div className="mb-10">
          <p className="level">Designation</p>
          <p className="name">{profile?.role}</p>
        </div>
      </div>

      <div className="address-wrapper">
        <h3 className="title">Address</h3>
        <div className="flex items-center mb-7 gap-60">
          <div>
            <p className="level">Country</p>
            <p className="name">USA </p>
          </div>
          <div>
            <p className="level">City/State</p>
            <p className="name">California, USA </p>
          </div>
        </div>
        <div className="flex items-center mb-7 gap-52">
          <div>
            <p className="level">Postal Code</p>
            <p className="name">#31745 </p>
          </div>
          <div>
            <p className="level">Road & House</p>
            <p className="name">RHD 07 h.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
