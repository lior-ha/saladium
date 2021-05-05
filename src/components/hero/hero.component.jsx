import React from 'react';
import { Link } from 'react-router-dom';

import './hero.scss';

const Hero = ({ title, image }) => (
    <div className="heroWrapper" style={{ backgroundImage: `url(${image})` }}>
        <div className="hero" >
            <div className="heroBox">
                <h1>{title}</h1>
                <Link to="/buildSalad" className="cpa">שנתחיל?</Link>
            </div>
        </div>
    </div>
);

export default Hero;