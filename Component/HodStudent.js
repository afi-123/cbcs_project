import React, { useEffect, useState } from 'react'
import { useHodAuthContext } from '../Hooks/useHodAuthContext'
const HodStudent = () => {
    const {HOD} = useHodAuthContext() 
    const [Attendence,setAttendance] = useState(false)
    const [Attendencesheet,setAttendancesheet] = useState([])
    const [Data,setData] = useState([])
    useEffect(()=>{
      const fetchdata = async() => {
        const reqbody = {"Dept":HOD.Dept}
        const responce = await fetch('http://localhost:4000/cbcs/hod/studinfo',
        {
          method:'POST',
          body:JSON.stringify(reqbody),
          headers:{'Content-Type':'application/json',
            'Authorization':`Bearer ${HOD.token}`}
        })
        const json = await responce.json()
        console.log(json)
        if(responce.ok)
        {
           setData(json)
        }

      }
      fetchdata()
    },[setAttendancesheet])
    const handelclick = (value) =>
    {
       setAttendancesheet(value)
       setAttendance(true)
    }
    console.log(Attendencesheet)
    const percentage = (value) =>
    {
      let count = 0;
      value.map((value)=>{
        if(value.present)
        {
          count = count + 1; 
        }
      })
      let per = (count / value.length) * 100
      return per.toFixed(2) + '%'
    }
  return (
    <div>
       {!Attendence && 
       <table id='Hod'>
          <thead>
              <tr>
                  <th>Name</th>
                  <th>RegNo</th>
                  <th>Section</th>
                  <th>Regestered course</th>
                  <th>Attendence</th>
                  <th>percentage</th>
              </tr>
          </thead>
          <tbody>
              {Data.map((value)=>(
                  <tr>
                      <td>{value.Name}</td>
                      <td>{value.RegNo}</td>
                      <td>A1</td>
                      <td>{value.CourseInfo ? value.CourseInfo.CourseName : 'N/A'}</td>
                      <button onClick={() =>handelclick(value.Attendence)}>View Attendence</button>
                      <td>{percentage(value.Attendence)}</td>
                  </tr>
                  ))}
          </tbody>
          </table>}

            {Attendence && 
              <table id='Hod'>
              <thead>
                  <tr>
                    <th>Date</th>
                    <th>Attendence</th>
                  </tr>
              </thead>
              <tbody>
               {
                Attendencesheet.map((value) => (
                  <tr>
                    <td>{value.Date}</td>
                    {value.present ? <td>Present</td> : <td>Absent</td>}
                  </tr>
                ))
               }
              </tbody>
              </table>}
    </div>
  )
              }

export default HodStudent
