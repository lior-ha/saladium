import React from 'react';

import './ingredient.scss';

const Ingredient = (props) => {
    let ingredient = null;

    switch (props.type) {
        case ('cucumber'):
            ingredient = 'cucumber'
            break;

        case ('tomato'):
            ingredient = 'tomato'
            break;

        case ('egg'):
            ingredient = 'egg'
            break;

        case ('tuna'):
            ingredient = 'tuna'
            break;

        case ('potato'):
            ingredient = 'potato'
            break;

        case ('lettuce'):
            ingredient = 'lettuce'
            break;

        case ('corn'):
            ingredient = 'corn'
            break;

        case ('onion'):
            ingredient = 'onion'
            break;

        case ('mushroom'):
            ingredient = 'mushroom'
            break;

        case ('pasta'):
            ingredient = 'pasta'
            break;

        case ('pickles'):
            ingredient = 'pickles';
            break;
        
        default:
            ingredient = null;
    }

    // Ingredients in Bowl Positioning
    const bowlHeight = 170;
    let top, right;
    let starterPoint = 24;
    if (props.index < 6 ) {
        top = bowlHeight - 50;
        right = props.index * 50 + starterPoint;
    } else if (props.index < 13) {
        top = bowlHeight - 100;
        right = (props.index - 6) * 50;
    } else if (props.index < 20) {
        top = bowlHeight - 150;
        right = (props.index - 13) * 50;
    }

    return <div className={`ing ${ingredient}`} style={{'right': right+'px', 'top': top+'px'}}></div>;
}

export default Ingredient;