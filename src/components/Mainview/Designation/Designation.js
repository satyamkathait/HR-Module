import React from 'react'
import * as d from './Designation.styles'
import * as s from '../Mainview.styles'
import PersonIcon from '@material-ui/icons/Person';
import DesigTable from './DesigTable'
function Designation() {
    return (
        <>
            <s.NavHeading>
                <s.Head> HR Module</s.Head>
                <s.NavBody> <PersonIcon />Welcome User</s.NavBody>
                <s.Account><select>
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

            <d.DesignationBody>
                        <d.BodyHeading> 
                            <d.Desigbutton>
                        
                        </d.Desigbutton>
                        </d.BodyHeading><DesigTable/>
            </d.DesignationBody>
        </>
    )
}

export default Designation
