import React from 'react';
import * as s from './App.styles';

//components
import Sidebar from './components/Sidebar/Sidebar'
import Mainview from './components/Mainview/Mainview'

function App() {
  const SidebarHeader = {
    fullName: Image.src = <img src="/icons/KSPL Logo Lateral.png" style={{ 'height': "50px", 'width': "20", 'margin-left': "10px", 'margin-top': "12px", 'text-align': "left", }} alt="" />,
    shortName: Image.src = <img src="/icons/KSPL Logo Very Small Trans.png" style={{ 'height': "50px", 'width': "20", 'margin-right': "12px", 'margin-top': "12px", 'text-align': "left", }} alt="" />,
  };
  const menuItems = [
    { name: 'Employee', to: '/', icon: '/icons/New Employee Trans.png', subMenuItems: [] },
    { name: 'Department', to: '/Department', icon: '/icons/New Department Trans.png', subMenuItems: [] },
    {
      name: 'Designation', to: '/Designation', icon: '/icons/New Designation Trans.png',
      subMenuItems: []
    },
    { name: 'Location', to: '/Location', icon: '/icons/New Locations Trans.png', subMenuItems: [] },
    { name: 'Mail', to: '/Mail', icon: '/icons/New Mail Domain Trans.png', subMenuItems: [] },
    { name: 'Calender', to: '/Calender', icon: '/icons/New Calendar Trans.png', subMenuItems: [] }
  ];

  return (
    <s.App>
      <Sidebar
        SidebarHeader={SidebarHeader}
        menuItems={menuItems}

      />

      <Mainview />

    </s.App>
  );
}

export default App;
