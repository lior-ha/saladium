import React from 'react';

import Hero from '../../components/hero/hero.component';

import homePageHeroImage from '../../assests/images/salad-hero.jpeg';
import './homepage.scss'

const Homepage = () => (
    <>
        <Hero title='לא סתם, סלט!' image={homePageHeroImage} />
        <div className="homepage">
            <p>ירקות טריים ישר מגינת הירק שלנו!</p>
            <p>חיתוך אישי לכל סלט!</p>
            <p>ויטמינים מהטבע!</p>
        </div>
    </>
);

export default Homepage;