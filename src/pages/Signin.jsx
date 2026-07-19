import { useState } from 'react'
import { supabase } from '../supabaseClient'
import { useNavigate } from 'react-router-dom'

function Signin() {
  const navigate = useNavigate()

  const [password, setpassword] = useState('')
  const [email, setemail] = useState('')


  const validatePassword = (password) => {
    if (password.length < 6) {
      return "Too short password"
    }
    if (password.length > 10) {
      return "Too long password"
    }
    return null
  }

  const signup = async () => {
    const error = validatePassword(password)

    if (error) {
      alert(error)
      return
    }

    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password)

    if (!hasSpecialChar) {
      alert("Password must contain a special character")
      return
    }

    const { error: supabaseError } = await supabase.auth.signUp({
      email,
      password,
    })

    if (supabaseError) {
      alert(supabaseError.message)
    } else {
      alert("Account Created")
      navigate('/')
    }
  }

  return (
    <div className="app-container">
      <div className="card">
        <h2>sign in form</h2>
        <input type="text"
        placeholder='enter your name' />
        <input
          type="email"
          placeholder="Enter your email"
          onChange={(e) => setemail(e.target.value)}
          />

        <br />

        <input
          type="password"
          placeholder="Enter your password"
          onChange={(e) => setpassword(e.target.value)}
        />

        <br />

        <button onClick={signup}>
          Sign Up
        </button>

      </div>
    </div>
  )
}

export default Signin