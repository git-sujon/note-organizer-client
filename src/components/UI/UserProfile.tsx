import { useAppSelector } from "../../redux/hooks";

const UserProfile = () => {
  const user  = useAppSelector((state) => state.user);

  console.log("user:", user)


  return (
    <div id="profile" className="space-y-3">
      <img
        src={user?.email}
        alt={user?.displayName}
        className="w-10 md:w-16 rounded-full mx-auto"
      />
      <div>
        <h2 className="font-medium text-xs md:text-sm text-center text-teal-500">
          {user?.displayName}
        </h2>
        <p className="text-xs text-gray-500 text-center">{user?.email}</p>
      </div>
    </div>
  );
};

export default UserProfile;
