import {Button, Table, TableBody,TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React , {useEffect,useState} from 'react'

const View = () => {
    var[students,setStudents] = useState([])
    useEffect(()=>{
        axios.get("http://localhost:3005/students")
        .then(response=>{
            setStudents(students=response.data)
            console.log(response.data)
        })
        .catch()

    },[])
    const deleteValues = (id)=>{
        console.log("delete clicked"+ id)
        axios.delete("http://localhost:3005/students/"+id);
        .then ((response)=>{
            console.log(response.idvalue);
            alert("sucessfully deleted");
            window.location.reload(false);

        })
    }
  return (
    <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
   
        
              
              <TableCell>Id</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Grade</TableCell>
              <TableCell>Delete</TableCell>
              
              </TableRow>
              </TableHead>
              <TableBody>
              {students.map((value,index)=>{
                return <TableRow  key={index}>
                  <TableCell>{value.id}</TableCell>
                  <TableCell>{value.name}</TableCell> 
                   <TableCell>{value.grade}</TableCell> 
                   

                </TableRow>
              })}
              </TableBody>
      </Table>
    </TableContainer>
    
        
)
}

export default View
