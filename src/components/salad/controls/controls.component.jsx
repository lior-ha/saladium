import React from 'react';

import './controls.scss';
import Control from './control/control.component';

const Controls = (props) => (
    <div className="controls">
        <p className="totalPrice">סה"כ לתשלום: <i>{props.price.toFixed(2)}</i> ש"ח</p>
        {props.ingredients.map(ingredient => (
            <Control 
                disabledInfo = {!!ingredient.amount}
                key={ingredient.name} 
                label={ingredient.label} 
                type={ingredient.name} 
            />
        ))}
        <button 
            onClick={props.donePrerping} 
            disabled={!props.orderable} 
            className="orderButton"
        >מתאים לי!</button>
    </div>
);

export default Controls;