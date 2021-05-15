
import React from 'react';
import "./DesigTable.css"
function DesigTable() {
   const DesigTable =[
 { id:1,select:"s",name:"aaa",code:"dd",Doj:"232",Designation:"fff",Dor:"564",Edit:'',Status:"button"},
 { id:1,select:"a",name:"sss",code:"dd",Doj:"234324",Designation:"ff",Dor:"323",Edit:'',Status:""},
 { id:1,select:"r",name:"sss",code:"dd",Doj:"34234",Designation:"ff",Dor:"334",Edit:'',Status:""}
]
  const renderEmployee =(DesigTable,index)=>{
return(
  <tr key={index}>
      <td>{DesigTable.select}</td>
      <td>{DesigTable.name}</td>
      <td>{DesigTable.code}</td>
      <td>{DesigTable.Doj}</td>
      <td>{DesigTable.Designation}</td>
      <td>{DesigTable.Dor}</td>
      <td>{DesigTable.Edit}</td>
      <td>{DesigTable.Status}</td>
  </tr>
);
  } 
    return (
        <>
        <table class="Designation-table"> 
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
    {DesigTable.map(renderEmployee)}
  </tbody>

        </table>
        </>
    );
}

export default DesigTable






