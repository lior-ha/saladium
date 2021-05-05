import React from 'react';
import NavigationItem from './navigationItem/navigationItem.component';

import './navigationItems.scss';

const Navigation = () => (
    <nav className="nav">
        <ul>
            <NavigationItem link="/" exact={true}>דף הבית</NavigationItem>
            <NavigationItem link="/buildSalad">בניית סלט</NavigationItem>
            <NavigationItem link="/about-us">עלינו</NavigationItem>
            <NavigationItem link="/contact-us">צור קשר</NavigationItem>
        </ul>
    </nav>
);

export default Navigation;