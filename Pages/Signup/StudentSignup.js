import { useState } from "react"
import { useSignup } from "../../Hooks/useSignup"
import '../../css/StudentSignup.css'
const StudentSignup = () =>{
const [Name,setName] = useState('')
const [Email,setEmail] = useState('')  
const [Batch,setBatch] = useState('')
const [Dept,setDept] = useState('')  
const [RegNo,setRegNo] = useState('')
const [password,setPassword] = useState('')
const {signup,error,isLoading} = useSignup()
const handelsubmit = async(e) =>
{
   e.preventDefault()
   await signup(Name,Email,Batch,Dept,RegNo,password)
}
    return(
        <form onSubmit={handelsubmit}>
            <label>Name</label>
            <input 
            className="StudentInfo"
            type="text"
            onChange={(e)=>setName(e.target.value)}
            value={Name}
            required
            />
            <label>Email</label>
            <input 
            className="StudentInfo"
            type="text"
            onChange={(e)=>setEmail(e.target.value)}
            value={Email}
            required
            />
            <label>Registor Number</label>
            <input 
            className="StudentInfo"
            type="text"
            onChange={(e)=>setRegNo(e.target.value)}
            value={RegNo}
            required
            />
            <label htmlFor="batch">Batch</label>
            <select
            className=".custom-select"
            id="batch"
            value={Batch}
            onChange={(e)=>setBatch(e.target.value)}
            required>
                <option value={null}>Select</option>
                <option value="2019-2023">2019-2023</option>
                <option value="2020-2024">2020-2024</option>
                <option value="2021-2025">2021-2025</option>
                <option value="2022-2026">2022-2026</option>
                <option value="2023-2027">2023-2027</option>
                <option value="2024-2028">2024-2028</option>
                <option value="2025-2029">2025-2029</option>
                <option value="2026-2030">2026-2030</option>
            </select>
            <label htmlFor="Dept">Dept</label>
            <select 
            id="Dept"
            value={Dept}
            onChange={(e)=>setDept(e.target.value)}
            required>
            <option value={null}>Select</option>
            <option value="Department of Computer Science and Engineering">Department of Computer Science and Engineering</option>
            <option value="Department of Information Technology">Department of Information Technology</option>
            <option value="Department of Electronics and Communication Engineering">Department of Electronics and Communication Engineering</option>
            <option value="Department of Electrical and Electronics Engineering">Department of Electrical and Electronics Engineering</option>
            <option value="Department of Mechanical Engineering">Department of Mechanical Engineering</option>
            <option value="Department of BioTechnology">Department of BioTechnology</option>
            </select>
            <label>Set password</label>
            <input 
            className="StudentInfo"
            type="password"
            onChange={(e)=>setPassword(e.target.value)}
            value={password}
            required
            />
             <button disabled={isLoading} id="Submit">Submit</button>
            {error && <div>{error}</div>}
        </form>
    )
}

export default StudentSignup