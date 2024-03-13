import React, { useState } from 'react'
import { useLogin } from '../../Hooks/useLogin'
import { Link } from 'react-router-dom';
import '../../css/studentlogin.css'
import logo from './back.jpg'
import head from '../../css/head.jpg'
const StudentLogin = () => {
    const [RegNo,setRegNo] = useState('')
    const [password,setPassword] = useState('')
    const {login,error,isLoading} = useLogin('')
    const handelsubmit = async(e) =>
  {
    e.preventDefault()
    await login(RegNo,password)
  }
  return (
  <div className='body'>
    <header><Link to = '/' id="HOME">HOME</Link></header>
 <div className="container">
     <div className="left-side">
     <img src={head} style={{width:'auto', height: 'auto'}} />
     </div>
    <div className="right-side">
         <div className="form-group-6gd">
           <img src={logo} style={{width: 460, height: 'auto'}} />
           <p className="text-2ii">
           <b>Enter your Details.</b>
            </p>
          </div>
         <div className="form-group-6gd">
            <form id="form"  onSubmit={handelsubmit}>
                <div className="form-group-6gd">
                    <label id="row1" htmlFor="Resitor Number">Register Number</label>
                    <input id="ip1"
                    type="text"
                    placeholder="Register Number" 
                    className="form-control-6at"
                    value={RegNo}
                    onChange={(e)=>setRegNo(e.target.value)}
                    required />
                    <div className="error" />
                    </div>
                <div className="form-group-6gd">
                    <label>Password</label>
                    <input id="Password" 
                    type="password" 
                    placeholder="Password" 
                    className="form-control-6at" 
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    required />
                    <div className="error" />
                </div>
             <button type="submit"
             className="btn-6pp btn-aci block-kf4"
             disabled={isLoading}>Log In</button>
            </form>
            {error && <div>{error}</div>}
            <br></br>
         <Link id ="Signup" to = '/Student_Signup'>SIGNUP</Link>
      </div>
    </div>
  </div>
  </div>
  )
}

export default StudentLogin
