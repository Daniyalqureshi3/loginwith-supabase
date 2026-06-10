import { useEffect, useState } from "react";
import React from "react";
import { supabase } from "../supabaseClient";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");


  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      setUser(user);
    };

    getUser();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null);
    });

    return () => subscription.unsubscribe();
  }, []);
  const googleLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
    });
  };
  const login = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert(error.message);
    }else{
        navigate("/Desktop");


    }
  };
    const goToSignup = () => {
    navigate("/signin");
  };
  

  return (
    <div className="app-container">
      <div className="card">
        <>
          <h1>Login Form</h1>

          {user && (
            <>
              <input
                type="email"
                placeholder="enter your email"
                onChange={(e) => setemail(e.target.value)}
              />
              <br />

              <input
                type="password"
                placeholder="enter your password"
                onChange={(e) => setpassword(e.target.value)}
              />
              <br />

              <button onClick={login}>Login</button>
              <br />
              <button onClick={goToSignup}>Sign Up</button>
              <br />
              <button onClick={googleLogin}>Login with Google</button>
            </>
          )}
        </>
      </div>
    </div>
  );
}
export default Login;
