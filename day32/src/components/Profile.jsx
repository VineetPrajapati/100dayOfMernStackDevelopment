import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Profile = () => {
  const { user, updateUser } = useContext(UserContext);
  const handleChange = (e) => {
    updateUser(e.target.value);
  };
  return (
    <div>
      <input type="text" value={user.name} onChange={handleChange} className="p-2 border rounded"/>
    </div>
  );
};

export default Profile;
