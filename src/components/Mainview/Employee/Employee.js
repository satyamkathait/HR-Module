import React from 'react'
import * as a from './Employee.styles'
import * as s from '../Mainview.styles'

import PersonIcon from '@material-ui/icons/Person';
import Table from './Table'
import AddEmp from './AddEmp'
import DeleteEmployee from './DeleteEmployee'

function Employee() {

    return (
        <>


            <s.NavHeading>
                <s.Head> HR Module</s.Head>
                <s.NavBody> <PersonIcon /> Welcome User</s.NavBody>
                <s.Account><select>
                    <option selected value="account">ACCOUNT</option>
                    <option value="ram">ram</option>
                    <option value="rohan">rohan</option>
                </select>

                </s.Account>
            </s.NavHeading>
            <a.search>
                <back><img src="/icons/Back Trans.png" style={{ 'height': "50px", 'width': "20", 'margin-left': "10px", 'margin-top': "10px", 'text-align': "left", }} alt="" /></back>
                <a.SearchBar><input type="text" placeholder="search" style={{ 'font-size': "17px", 'width': "1200px",'border-radius':"8px" }} />
                    <img src="/icons/Search Trans.png" style={{ 'height': "40px", 'width': "40px", 'align-items': "center" ,}} alt="" />
                </a.SearchBar>
            </a.search>


            <a.EmployeeBody>
                           <a.BodyHeading>
                               <a.button>
                                   <AddEmp/>
                               </a.button>
                              <a.Deletebutton> <DeleteEmployee/></a.Deletebutton>
                           </a.BodyHeading>
                
                 <a.table><Table/></a.table>
            </a.EmployeeBody>


        </>



    )
}
export default Employee
