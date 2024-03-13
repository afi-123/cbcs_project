import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../css/StudentTable.css'
import { useCourseContext } from '../Hooks/useCourseContext'
import {useAuthContext} from '../Hooks/useAuthContext'
import { useLogout } from '../Hooks/useLogout'
import StudentInfo from './StudentInfo'
const StudentTable = ({course}) => {
    const {user} = useAuthContext()
    console.log(user)
    const CourseReg = () =>
    {
      if(user.CourseInfo === null)
      {
        return 
      }
      else{
        return user.CourseInfo
      }
    }
    const CourseReg1 = CourseReg()
    const [data,setData] = useState([]) 
    const [courseinfo,setCourseInfo] = useState('')
    const {dispatch} = useCourseContext()
    const {logout} = useLogout()
    useEffect(() =>
    {
        setData(course)
        console.log(user)
    },[course])
    const handelClick = (e,user) =>
    {
        e.preventDefault()
        setCourseInfo(user)
    } 
    const handelclose = (e) =>
    {
      e.preventDefault()
      setCourseInfo('')
    }
    const handelRegister = async(e) =>
    {
      const response = await fetch('http://localhost:4000/cbcs/course/update/'+courseinfo._id,
      {
        method:'PUT',
        body:JSON.stringify({user_id:user.user_id}),
        headers:{'Content-Type':'application/json',
                'Authorization':`Bearer ${user.token}`},
        
      })
      const json = await response.json()
      console.log(json)
      if(!response.ok)
      {
        console.log("Error in response")
      }
      if(response.ok)
      {
           dispatch({type:'SET_COURSE',payload:json})
      }
      const response1 = await fetch('http://localhost:4000/cbcs/course/update/user/'+user.user_id,
      {
        method:'PUT',
        body:JSON.stringify({course_id:courseinfo._id}),
        headers:{'Content-Type':'application/json',
                 'Authorization':`Bearer ${user.token}`}
      })
      console.log(user)
      if(!response1.ok)
      {
        console.log(response1)
      }
      if(response1.ok)
      {
        console.log("Course Registered")
      }
      setData(course)
      setTimeout(logout,2000)
    }
  return (
    <div>
    {!courseinfo && !CourseReg1 &&
      <table id='Student'>
        <thead>
            <tr>
                <th>Course</th>
                <th>Faculty</th>
                <th>DEPT</th>
                <th>AVAILABLE SEAT</th>
                <th>Registor</th>
            </tr>
        </thead>
        <tbody>
            {data.map((user)=>(
                <tr>
                    <td>{user.CourseName}</td>
                    <td>{user.Coordinator.Name}</td>
                    <td>{user.ProvidedBy}</td>
                    <td>{user.Seats}</td>
                    <td><button className='button Reg'onClick={(e) => handelClick(e,user)} disabled={user.Seats <= 0}>Register</button></td>
                </tr>
            ))}
        </tbody>
      </table>}
      {courseinfo && 
      <div>
          <div>
             <h1>About</h1>
             <h2>
             <p>
                Course : {courseinfo.CourseName}<br></br>
                Faculty : {courseinfo.Coordinator.Name}<br></br>
                Available Seats : {courseinfo.Seats}<br></br>
                Provided By : {courseinfo.ProvidedBy}<br></br>
              </p>
             </h2>
             <Link to = '/student/Course/Register' ><button className='button conform' onClick={handelRegister}>Register</button></Link>
            <button className='button close' onClick={handelclose}>Close</button>
          </div>
      </div>}
      {CourseReg1 &&
     <div><StudentInfo key={user.user_id} user={user} /></div>}
    </div>
  )
}

export default StudentTable
