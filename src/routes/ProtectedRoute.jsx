import { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function ProtectedRoute() {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser) {
      navigate("/login");
    }
  }, [currentUser, navigate]);

  return currentUser ? <Outlet /> : null;
}
