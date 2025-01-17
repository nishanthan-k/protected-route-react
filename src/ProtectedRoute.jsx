import { Navigate, Outlet } from "react-router-dom"

const ProtectedRoute = () => {
  const isLoggedIn = false;

  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />
}

export default ProtectedRoute