import React from 'react';
import { NavLink } from 'react-router-dom'

import './navigationItem.scss';

const NavigationItem = (props) => (
    <li className="navItem"><NavLink to={props.link} exact>{props.children}</NavLink></li>
)

export default NavigationItem;