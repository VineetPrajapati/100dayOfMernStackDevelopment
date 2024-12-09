// Dec 11, 2024
// Day 32: Refactor components using the Context API.

import Navbar from "./components/Navbar"
import Profile from "./components/profile"

const App = () => {
  return (
    <div className="w-full h-screen bg-gray-500 flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold">User Context</h1>
      <Navbar />
      <Profile />  

    </div>
  )
}

export default App