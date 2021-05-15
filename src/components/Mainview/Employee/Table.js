
import React from 'react';
import "./table.css"
function Table() {
   const employeeTable =[
 { id:1,select:"s",name:"aaa",code:"dd",Doj:"232",Designation:"fff",Dor:"564",Edit:'',Status:"button"},
 { id:1,select:"a",name:"sss",code:"dd",Doj:"234324",Designation:"ff",Dor:"323",Edit:'',Status:""},
 { id:1,select:"r",name:"sss",code:"dd",Doj:"34234",Designation:"ff",Dor:"334",Edit:'',Status:""}
]
  const renderEmployee =(employeeTable,index)=>{
return(
  <tr key={index}>
      <td>{employeeTable.select}</td>
      <td>{employeeTable.name}</td>
      <td>{employeeTable.code}</td>
      <td>{employeeTable.Doj}</td>
      <td>{employeeTable.Designation}</td>
      <td>{employeeTable.Dor}</td>
      <td>{employeeTable.Edit}</td>
      <td>{employeeTable.Status}</td>
  </tr>
);
  } 
    return (
        <>
        <table class="content-table"> 
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
    {employeeTable.map(renderEmployee)}
  </tbody>

        </table>
        </>
    );
}

export default Table






