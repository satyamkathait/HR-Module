import React from 'react'
import {BrowserRouter ,Switch,Route} from 'react-router-dom'
//components
import Employee from "./components/Mainview/Employee/Employee"
import Location from "./components/Mainview/Location/Location"
import Designation from "./components/Mainview/Designation/Designation"
import Department from "./components/Mainview/Department/Department"
import Calender from "./components/Mainview/Calender/Calender"
import Mail from "./components/Mainview/Mail/Mail"

const Routes =()=>{
    return(
        <BrowserRouter>
        <Switch>
         <Route exact path='/' component={Employee}/>
         <Route  path='/department' component={Department}/>
         <Route  path='/designation' component={Designation}/>
         <Route  path='/location' component={Location}/>
         <Route  path='/mail' component={Mail}/>
         <Route  path='/calender' component={Calender}/>
        </Switch>
        </BrowserRouter>
        

    );
}
export default Routes