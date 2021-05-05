import React from 'react';

import saladiumLogo from  '../../assests/images/salad-logo.svg';

import './logo.scss';

const Logo = () => (
    <div className="logo"><img className="logoImg" alt="סלדיום" src={saladiumLogo} /> <a href="/">סלדיום</a></div>
    
)

export default Logo;