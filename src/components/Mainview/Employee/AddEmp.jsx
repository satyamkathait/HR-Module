import React,{useState} from 'react'
import './AddEmp.css'

import Modal from 'react-modal'


function AddEmp() {
   const [modalIsOpen,setModalIsOpen]=useState(false);
   
    return (
        <>
          <img src="/icons/Add.png" alt="" className="show-Button" onClick={()=>setModalIsOpen(true)}/>
            <Modal 
            isOpen={modalIsOpen} 
            className="Button " 
            onRequestClose={()=>setModalIsOpen(false)}
           >
            <form >
                 <button class="close-Button" onClick={()=>setModalIsOpen(false)}>&times;</button>
                <input type="email" class="form-contro" placeholder="Email"/>
                <input type="text" class="form-contro" placeholder="First Name"/>
                <input type="text" class="form-contro" placeholder="Second Name"/>
                <input type="text" class="form-contro" placeholder="Contact"/>
                <input type="select" class="form-contro" placeholder="Employee Field"/>
                <input type="password" class="form-contro" placeholder="Password"/>
                <button type="submit" id="loginBtn2" >Create Employee</button>
               
        </form>
       </Modal> 
           </>
    );

}




export default AddEmp


