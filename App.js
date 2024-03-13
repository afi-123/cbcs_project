import UserType from "./Component/UserType";
import {BrowserRouter,Navigate,Route,Routes} from 'react-router-dom'
import Dean from "./Pages/Users/Dean";
import Hod from "./Pages/Users/Hod";
import Student from "./Pages/Users/Student";
import Staf from "./Pages/Users/Staf";
import StudentSignup from "./Pages/Signup/StudentSignup";
import Course from "./Pages/Student/Course";
import { useAuthContext } from "./Hooks/useAuthContext";
import { useHodAuthContext } from "./Hooks/useHodAuthContext";
import  HodHome from "./Pages/Hod/HodHome";
import StaffHome from "./Pages/Staff/StaffHome";
import CourseRegister from "./Component/CourseRegister";
import {useStaffAuthContext} from "./Hooks/useStaffAuthContext"
import Attendence from "./Component/Attendence";
import HodStudent from "./Component/HodStudent";
import AttendenceInfo from "./Component/AttendenceInfo";
import CreateCourse from "./Component/CreateCourse";
import HodAbout from "./Component/HodAbout";
import HodHomePage from "./Component/HodHomePage";
function App() {
  const {user} = useAuthContext()
  const {HOD} = useHodAuthContext()
  const {staff} = useStaffAuthContext()
  console.log(user)
  console.log(HOD)
  console.log(staff)
  return (
    <div>
      <BrowserRouter>
         <Routes>
            <Route 
            path='/' 
            element={!user  ? <UserType />: <Navigate to='/student/Course'/>}/>
            <Route 
            path='/dean'
            element={<Dean />}/>
            <Route 
            path='/hod'
            element={!HOD ? <Hod /> : <Navigate to='/hod/Home'/>}/>
            <Route 
            path='/staf'
            element={!staff ? <Staf />: <Navigate to='/staf/Home'/>}/>   
            <Route 
            path='/student/Course'
            element={user ? <Course /> : <Navigate to ='/'/>}/>     
            <Route 
            path='/student/Course/Register'
            element={user ? <CourseRegister/> : <Navigate to ='/'/>}/>     
            <Route 
            path='/student'
            element={!user ? <Student /> : <Navigate to='/student/Course'/>}/>
            <Route 
            path='/Student_Signup'
            element={!user ? <StudentSignup />:<Navigate to='/student'/>}/>
            <Route 
            path='/hod/Home'
            element={ HOD ? <HodHome /> : <Navigate to='/hod'/>}/>
            <Route 
            path='/hod/student_info'
            element={ HOD ? <HodStudent/> : <Navigate to='/hod'/>}/>
            <Route 
            path='/staf/Home'
            element={ staff ? <StaffHome /> : <Navigate to='/staf'/>}/>
            <Route 
            path='/staf/Home/Attendence'
            element={ staff ? <Attendence /> : <Navigate to='/staf'/>}/>
            <Route 
            path='/staf/Home/Attendence/Info'
            element={ staff ? <AttendenceInfo /> : <Navigate to='/staf'/>}/>
            <Route 
            path='/hod/Create-course'
            element={HOD ? <CreateCourse/> : <Navigate to='/hod/'/>}/>
            <Route 
            path='/hod/About'
            element={HOD ? <HodAbout/> : <Navigate to='/hod/'/>}/>
         </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
