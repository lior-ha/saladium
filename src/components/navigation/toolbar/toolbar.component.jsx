import React from 'react';

import Navigation from '../navigationItems/navigationItems.component';
import Logo from '../../logo/logo.component';

import SideDrawerToggler from '../sideDrawer/sideDrawerToggler/sideDrawerToggler.component';

import './toolbar.scss';

const Toolbar = (props) => (
    <header className="toolbar">
        <SideDrawerToggler clicked={props.closed} />
        <div className="sideBarOpener"></div>
        {/* <div className="orderNow"><a href="/">הזמן עכשיו!</a></div> */}
        <Navigation />
        <Logo />
    </header>
)

export default Toolbar;