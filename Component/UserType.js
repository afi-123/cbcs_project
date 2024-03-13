import { Link } from 'react-router-dom'
import React from 'react'
import '../css/UserType12.css'
import logo from '../css/back.jpg'

const UserType = () => {
  return (
   <div className='usertype'>
    <nav>
        <div >
        <Link to ='/dean'>DEAN</Link>
        </div>
        <div>
        <Link to ='/hod'>HOD</Link>
        </div>
        <div >
        <Link to ='/staf'>STAF</Link>
        </div>
        <div>
        <Link to ='/student'>STUDENT</Link>
        </div>
    </nav>
   </div>
  )
}

export default UserType
