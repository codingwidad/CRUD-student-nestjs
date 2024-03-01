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
    const Search=(query)=>{
        axios
        .post(`/api/student/search?key=${query}`)
        .then(res=>{
            setSudents(res.data)
        })
        .catch(err=>{
            console.log(err)
        })

    };
    const AddStudent=(isAdding)=>{
        axios
        .post('/api/student/', isAdding)
        .then(res => {
            setSudents([...students,res.data])
        })
        .catch(err=>{
            console.log(err)
        })
    }
    return (
    <StudentContext.Provider value={{ FetchStudents, Search, AddStudent,students}}>
     {children}
    </StudentContext.Provider>);
    
}