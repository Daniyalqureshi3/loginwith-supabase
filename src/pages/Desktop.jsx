import React, { useEffect } from 'react'
import { useState } from 'react'
import { supabase } from '../supabaseClient'
import { useNavigate } from 'react-router-dom'
import "./App.css"

function Desktop() {
    
const navigate = useNavigate()
const [name, setname] = useState('')
const [phone, setphone] = useState('')
const [img, setimg] = useState(null)
const [Data, setdata]= useState([])
const adddata = async() => {
  const {error} = await supabase.from('users_data').insert([{name, phone, img}])
  if (error) {
    alert(error.message)
  }else{
    alert("data added")
    setname('')
    setphone('')
    setimg('')
  }
};
    const goToout = () => {
    navigate("/Login");
  };

  return (
    <div className='container'>
      <div className="card2">

        <h1>ADD Data Here</h1>
         <input type="text"
      placeholder='enter your name'
      value={name}
      onChange={(e)=> setname(e.target.value)}  />
      <br /><br />
      <input type="number"
      placeholder='enter your number'
      value={phone}
      onChange={(e)=> setphone(e.target.value)}  />
      <br /> <br />

      <input
  type="file"
  placeholder='add your image here'
  onChange={(e) => setimg(e.target.files)}
/>

      <br /> <br />
      <button onClick={adddata} className='button2'>Add data</button>
          <button onClick={() => navigate('/fetch')} className='button2'>
        Show data page
      </button> 
      
      <button onClick={goToout}>Logout</button>
      
      </div>
    </div>
  )
}

export default Desktop
