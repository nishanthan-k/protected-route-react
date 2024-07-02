import { NavLink, Route, Routes } from "react-router-dom"
import ProtectedRoute from "./ProtectedRoute"
import Home from "./components/Home"
import About from "./components/About"
import Profile from "./components/Profile"
import Login from "./components/Login"
import "./App.css"

const App = () => {
  return (
    <>
      <nav>
        <NavLink to="/" >Home</NavLink>
        <NavLink to="/about" >About</NavLink>
        <NavLink to="/profile">Profile</NavLink>
        <NavLink to="/login">Login</NavLink>
      </nav>
      
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
        </Route>

         <Route path="/login" element={<Login />} />
      </Routes>
    </>
  )
}

export default App