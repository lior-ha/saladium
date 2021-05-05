import React, { useState } from 'react';

import Toolbar from '../../components/navigation/toolbar/toolbar.component';

import SideBar from '../../components/navigation/sideDrawer/sideDrawer.component';
import './layout.scss';

const Layout = (props) => {
    const [showSideDrawer, setShowSideDrawer] = useState(false);

    const sideDrawerClosedHandler = () => {
        setShowSideDrawer(!showSideDrawer);
    }

    return (
        <>
            {/* For Mobile */}
            <SideBar open={showSideDrawer} closed={sideDrawerClosedHandler} />
            <Toolbar closed={sideDrawerClosedHandler}/>            
            <main className="content">
                {props.children}
            </main>
        </>
    );
}
export default Layout;