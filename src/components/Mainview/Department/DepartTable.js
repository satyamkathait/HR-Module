import React from 'react';
import "./DepartTable.css"
function Table() {
   const departmentTable =[
 { id:1,select:"s",name:"aaa",code:"dd",Doj:"232",Designation:"fff",Dor:"564",Edit:'',Status:"button"},
 { id:1,select:"a",name:"sss",code:"dd",Doj:"234324",Designation:"ff",Dor:"323",Edit:'',Status:""},
 { id:1,select:"r",name:"sss",code:"dd",Doj:"34234",Designation:"ff",Dor:"334",Edit:'',Status:""}
]
  const renderEmployee =(departmentTable,index)=>{
return(
  <tr key={index}>
      <td>{departmentTable.select}</td>
      <td>{departmentTable.name}</td>
      <td>{departmentTable.code}</td>
      <td>{departmentTable.Doj}</td>
      <td>{departmentTable.Designation}</td>
      <td>{departmentTable.Dor}</td>
      <td>{departmentTable.Edit}</td>
      <td>{departmentTable.Status}</td>
  </tr>
);
  } 
    return (
        <>
        <table class="Department-table"> 
  <thead>
    <tr>
      
      <th>Select</th>
      <th>Name</th>
      <th>Code</th>
      <th>DOJ</th>
      <th>Designation</th>
      <th>DOR</th>
      <th>Edit</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    {departmentTable.map(renderEmployee)}
  </tbody>

        </table>
        </>
    );
}

export default Table


