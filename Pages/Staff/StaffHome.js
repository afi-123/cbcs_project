import React, { useEffect, useState } from 'react'
import {useStaffAuthContext} from '../../Hooks/useStaffAuthContext'
import {useStaffLogout} from '../../Hooks/useStaffLogout'
import {Link} from 'react-router-dom'
const StaffHome = () => {
const {staff} = useStaffAuthContext();
console.log(staff)
const {logout} = useStaffLogout();
const [Data,setData] = useState([])
useEffect(()=>
{
  const fetchdata = async() =>
  {
    const responce = await fetch('http://localhost:4000/cbcs/staf/RegStudent/'+staff.id,
    {headers:{'Authorization':`Bearer ${staff.token}`}})
    const json = await responce.json()
    console.log(json)
    if(responce.ok)
    {
      setData(json)
    }
  }
  if(staff)
  {
    fetchdata()
  }
},[])
const handelclick = async() =>
{
  logout()
}

  return (
    <div>
      {staff &&
        (<div>
        <button onClick={handelclick} id="Logout">LOG OUT</button>
        <p className='info'>{staff.Email}</p>
        <p className='info'>{staff.Name}</p>
        </div>)}
        {Data &&
       <table id='Hod'>
        <thead>
            <tr>
                <th>Name</th>
                <th>RegNo</th>
                <th>Email</th>
                <th>DEPT</th>
                <th>Course</th>
            </tr>
        </thead>
        <tbody>
            {Data.map((value)=>(
            value.RegStudents.map((v)=>(
            <tr>
              <td>{v.Name}</td>
              <td>{v.RegNo}</td>
              <td>{v.Email}</td>
              <td>{v.Dept}</td>
              <td>{value.CourseName}</td>
            </tr>
              ))
            ))}
        </tbody>
      </table>}
      <Link to='/staf/Home/Attendence'>Give Attendence</Link>
      <br></br>
      <Link to='/staf/Home/Attendence/Info'>View Attendence Info</Link>
    </div>
  )
}

export default StaffHome
