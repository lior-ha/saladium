import React from 'react';

import Logo from '../../logo/logo.component';

import Backdrop from '../../UI/backdrop/backdrop.component';

import NavigationItems from '../navigationItems/navigationItems.component';

import './sideDrawer.scss'

const SideDrawer = (props) => {

    return (
        <>
            <Backdrop show={props.open} clicked={props.closed} />
            <div className={`sideDrawer ${props.open ? 'open' : 'closed'}`}>
                <Logo />
                <NavigationItems />
            </div>
        </>
    );
};

export default SideDrawer;