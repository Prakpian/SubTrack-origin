import { useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function ProtectedRoute() {
  const { currentUser } = useContext(AuthContext);

  if (!currentUser) {
    useNavigate("/login");
  }

  return <Outlet />;
}
