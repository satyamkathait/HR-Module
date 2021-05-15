import React from 'react'
import * as d from './Department.styles'
import * as s from '../Mainview.styles'
import PersonIcon from '@material-ui/icons/Person';
import DepartTable from './DepartTable'
function Department() {
    return (

        <>

            <s.NavHeading>
                <s.Head> HR Module</s.Head>
                <s.NavBody> <PersonIcon />Welcome User</s.NavBody>
                <s.Account>
                    <select>
                        <option selected value="account">ACCOUNT</option>
                        <option value="ram">ram</option>
                        <option value="rohan">rohan</option>
                    </select>
                </s.Account>
            </s.NavHeading>
            <d.search>
                <back><img src="/icons/Back Trans.png" style={{ 'height': "50px", 'width': "20", 'margin-left': "10px", 'margin-top': "10px", 'text-align': "left", }} alt="" /></back>
                <d.SearchBar><input type="text" placeholder="search" style={{ 'font-size': "17px", 'width': "1200px",'border-radius':"8px" }} />
                    <img src="/icons/Search Trans.png" style={{ 'height': "40px", 'width': "40px", 'align-items': "center" }} alt="" />
                </d.SearchBar>
            </d.search>
            <d.DepartmentBody>
                <d.BodyHeading>
                    <d.departbutton>
                        
                        </d.departbutton>
                </d.BodyHeading>
                        <DepartTable/>
                </d.DepartmentBody>

        </>
    )
}

export default Department
