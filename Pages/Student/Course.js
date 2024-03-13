import { useEffect } from 'react'
import { useAuthContext } from '../../Hooks/useAuthContext'
import { useLogout } from '../../Hooks/useLogout'
import { useCourseContext } from '../../Hooks/useCourseContext'
import CourseDetails from '../../Component/CourseDetails'
const Course = () => {
const {user} = useAuthContext()
const {logout} = useLogout()
const handelclick = () =>
{
    logout()
}
  const  {course,dispatch} = useCourseContext() 
  useEffect(() =>
  {
  const fetchcourse = async() =>{
  const response = await fetch('http://localhost:4000/cbcs/course/',
  {
    headers:{'Authorization':`Bearer ${user.token}`}}
  )
  const json = await response.json()
  console.log(json)
  if(!response.ok)
  {
    console.log("Connot Fetch")
  }
  if(response.ok){
    dispatch({type:'SET_COURSE',payload:json})
  }
  }
  if(user){
    fetchcourse()
  }
},[dispatch])
   console.log(course)
  return (
    <div>
     <header>
        {user &&
        (<div>
        <button onClick={handelclick} id="Logout">LOG OUT</button>
        <p className='info'>{user.RegNo}</p>
        <p className='info'>{user.Name}</p>
        </div>)}
     </header>{
      course && <CourseDetails key={course._id} course={course}/>}
    </div>
  )
}

export default Course
