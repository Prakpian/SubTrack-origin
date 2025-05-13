import { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function PublicRoute() {
  const navigate = useNavigate();
  const { currentUser, loading } = useContext(AuthContext);

  useEffect(() => {
    if (!loading && currentUser !== null) {
      navigate("/dashboard", { replace: true });
    }
  }, [currentUser, loading, navigate]);

  return <Outlet />;
}
