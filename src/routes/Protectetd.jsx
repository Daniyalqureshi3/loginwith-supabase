import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { supabase } from "../supabaseClient";

function Protected() {
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();

      setIsLoggedIn(!!data.session);
      setLoading(false);
    };

    checkSession();
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return isLoggedIn ? <Outlet /> : <Navigate to="/" replace />;
}

export default Protected;
