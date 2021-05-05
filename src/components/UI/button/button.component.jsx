import React from 'react';

import './button.scss';

const Button = (props) => (
    <button className={`button ${props.type}`} onClick={props.clicked}>{props.children}</button>
);

export default Button;