import { createContext, useState } from "react";
import axios from 'axios';

export const StudentContext= createContext();

export default function Wrapper ({ children }) {
    const[students, setSudents] = useState([])
    const FetchStudents= () =>{
        axios
        .get('/api/student')
        .then(res=>{
           setSudents(res.data)
        }
        ).catch(err=>{
            console.log(err.res.data)
        })
    }
    return (
    <StudentContext.Provider value={{ FetchStudents, students}}>
     {children}
    </StudentContext.Provider>);
    
}