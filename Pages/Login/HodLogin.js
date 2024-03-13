import React, { useState } from 'react'
import { useHodLogin } from '../../Hooks/useHodLogin'
import logo from './back.jpg'
import head from '../../css/head.jpg'
import { Link } from 'react-router-dom'
import './HodLogin.css'
const StudentLogin = () => {
    const [Email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const {login,error,isLoading} = useHodLogin('')
    const handelsubmit = async(e) =>
  {
    e.preventDefault()
    await login(Email,password)
  }
  return (
  <div className='body-log'>
       <main className="container-log">
      <h2>Login</h2>
      <form on onSubmit={handelsubmit} className='log-form'>
        <div className="input-field">
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Enter Your Username"
            value={Email}
            onChange={(e)=>{setEmail(e.target.value)}}
          />
          <div className="underline"></div>
        </div>
        <div className="input-field">
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter Your Password"
            value={password}
            onChange={(e)=>{setPassword(e.target.value)}}
          />
          <div className="underline"></div>
        </div>
        <input type="submit" value="Login" />
      </form>
      {error && <div className='error-log'>{error}</div>}
    </main>
  </div>
  )
}

export default StudentLogin
