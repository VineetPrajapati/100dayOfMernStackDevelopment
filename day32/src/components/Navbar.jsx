import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Navbar = () => {
  const { user } = useContext(UserContext);
  return (
    <div>
      <h1 className="text-3xl p-4">Welcome, &quot;{user.name}&quot;</h1>
    </div>
  );
};

export default Navbar;
