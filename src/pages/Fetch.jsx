import React, { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import { useNavigate } from "react-router-dom";
import "./Fetch.css"



function Fetch() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const { data, error } = await supabase.from("users_data").select("*");

    if (error) {
      alert(error.message);
    } else {
      setData(data);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  
  const GotoHome = () => {
    navigate("/Desktop");
  };

  return (
<div className="fetch-container">
  <div className="cards-wrapper">
    {data.map((item) => (
      <div className="user-card" key={item.id}>
        <img src={item.img} alt="image" className="user-image" />
        <h3>{item.name}</h3>
        <p>{item.phone}</p>
      </div>
    ))}
  </div>

  <button onClick={GotoHome} className="button3">
    Home
  </button>
</div>
  );
}

export default Fetch;
