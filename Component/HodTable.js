import React, { useEffect, useState } from 'react'
import '../css/HodTable.css'
import {useHodAuthContext} from '../Hooks/useHodAuthContext'
import {useCourseContext} from '../Hooks/useCourseContext'
const HodTable = () => {
    const [data,setData] = useState([]) 
    const [studentData,setStudentData]= useState([])
    const [courseinfo,setCourseInfo] = useState('')
    const {HOD} = useHodAuthContext()
    const {dispatch,course} = useCourseContext()
    useEffect(() =>
    {
        setData(course)
        console.log(course)
    },[course])
    const handelClick = async(e,user) =>
    {
        e.preventDefault()
        const response = await fetch('http://localhost:4000/cbcs/hod/RegStudent/'+user._id,
        {
          headers:{'Authorization':`Bearer ${HOD.token}`}
        })
        const json = await response.json()
        if(response.ok)
        {  
            setStudentData(json)
            console.log(studentData)
        }
        setCourseInfo(user)
    } 
    const handeldelete = async(e,user) =>
    { 
      const response = await fetch('http://localhost:4000/cbcs/hod/delete/'+user._id,
      {
        method:'DELETE',
        headers:{'Authorization':`Bearer ${HOD.token}`}
      })
      const json = await response.json() 
      if(!response.ok)
      {
        console.log(response)
      }
      if(response.ok)
      {
        console.log(json)
        dispatch({title:'DELETE_COURSE',payload:json})
        console.log("Course Deleted")
      }
      window.location.reload()
    }                                    
  return (
    <div>
      {!courseinfo &&
        <table id='Hod'>
          <thead>
              <tr>
                  <th>Course</th>
                  <th>Faculty</th>
                  <th>DEPT</th>
                  <th>AVAILABLE SEAT</th>
                  <th>OPTIONS</th>
              </tr>
          </thead>
          <tbody>
              {data.map((user)=>(
                  <tr>
                      <td>{user.CourseName}</td>
                      <td>{user.Coordinator.Name}</td>
                      <td>{user.ProvidedBy}</td>
                      <td>{user.Seats}</td>
                      <td>
                        <button className='button Reg' onClick={(e)=>handelClick(e,user)}>Registered Students</button>
                        <button className='button close' onClick={(e)=>handeldelete(e,user)}>Delete</button>
                      </td>
                  </tr>
              ))}
          </tbody>
        </table>
      }
      {studentData && courseinfo &&
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
            {studentData.map((value)=>(
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
    </div>
  )
}
export default HodTable
