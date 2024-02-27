import useAuth from "../../../../Hooks/useAuth";

const UserHome = () => {
  const { user } = useAuth();
  return (
    <div>
      <h2 className="text-3xl text-red-600 font-bold">
        Well Come {user?.displayName ? user?.displayName : "Back"}
      </h2>
    </div>
  );
};

export default UserHome;
