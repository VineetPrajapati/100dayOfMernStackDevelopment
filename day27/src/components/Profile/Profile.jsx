import { Link, Outlet } from "react-router-dom"

const Profile = () => {
  return (
    <div className="w-full h-96 bg-white m-5 rounded-xl flex flex-col justify-center items-center ">
        <Link className="text-3xl font-bold" to="setting">Profile</Link>
        <Outlet />
    </div>
  )
}

export default Profile