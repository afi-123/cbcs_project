import React, { useEffect, useState } from 'react'

const StudentInfo = ({user}) => {
    const [data,setData] = useState([])
    useEffect(() => async() =>
    {
        const response = await fetch('http://localhost:4000/cbcs/course/'+user.user_id,
      {
        headers:{'Authorization':`Bearer ${user.token}`}
      })
      const json = await response.json()
      if(!response.ok)
      {
        console.log("Error in response")
      }
      if(response.ok)
      {
        setData(json)
      }
    },[])
  return (
    <div>
        {data.map((value) => (
            <>
            <h2>{value.Name}</h2>
            <h2>{value.RegNo}</h2>
            <h2>{value.Batch}</h2>
            <h2>{value.Dept}</h2>
            <h2>{value.CourseInfo.CourseName}</h2>
            <h2>{value.CourseInfo.Coordinator.Name}</h2>
            <h2>{value.CourseInfo.ProvidedBy}</h2>
            </>
        ))}
    </div>
  )
}

export default StudentInfo
