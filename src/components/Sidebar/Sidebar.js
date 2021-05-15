import React, { useState, useEffect } from 'react'
import * as s from './Sidebar.styles';
import { BrowserRouter, Link, } from 'react-router-dom';
const Sidebar = props => {
    const {
        SidebarHeader = {
            fullName: '',
            shortName: ''
        },
        menuItems = []
    } = props;

    //hooks state
    const [selected, setSelectedMenuItem] = useState(menuItems[0].name);
    const [isSidebarOpen, setSidebarState] = useState(true)
    const [header, setHeader] = useState(SidebarHeader.fullName)

    // Effect
    //update of header state
    useEffect(() => {
        isSidebarOpen ? setTimeout(() => setHeader(SidebarHeader.fullName), 200) : setHeader(SidebarHeader.shortName);

    }, [isSidebarOpen, SidebarHeader])


    const handleMenuItem = name => {
        setSelectedMenuItem(name)
    }
    //update of sidebar state
    useEffect(() => {
        const updateWindowWidth = () => {
            if (window.innerWIdth < 1280 && isSidebarOpen) setSidebarState(false);
        }
        window.addEventListener('resize', updateWindowWidth)
        return () => window.removeEventListener('resize', updateWindowWidth)
    }, [isSidebarOpen]);

    const menuItemsJSX = menuItems.map((item, index) => {
        const isItemSelected = selected === item.name;


        return (
            <BrowserRouter>

                <Link to={item.to} style={{ textDecoration: "none" }}>

                    <s.MenuItem key={index}

                        selected={isItemSelected}
                        onClick={() => handleMenuItem(item.name)}
                        isSidebarOpen={isSidebarOpen}
                    >
                        <s.Icon isSidebarOpen={isSidebarOpen} src={item.icon} />
                        <s.Text isSidebarOpen={isSidebarOpen}>{item.name}</s.Text>

                    </s.MenuItem>
                </Link>

            </BrowserRouter>

        );

    })

    return (
        <s.SidebarContainer isSidebarOpen={isSidebarOpen}>
            <s.SidebarHeader>{header}</s.SidebarHeader>
            <s.MenuItemContainer>{menuItemsJSX}</s.MenuItemContainer>
            <s.TogglerContainer onClick={() => setSidebarState(!isSidebarOpen)}>
                <s.Toggler />

            </s.TogglerContainer>
        </s.SidebarContainer>
    )
}

export default Sidebar
