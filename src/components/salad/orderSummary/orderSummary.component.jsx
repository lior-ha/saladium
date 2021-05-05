import React from 'react';

import Button from '../../UI/button/button.component';

import './orderSummary.scss';

const OrderSummary = (props) => {
    return (
        <div className="orderSummary">
            <h3 className="title">בדרך אליך!</h3>
            <p>היי {props.name}!</p>
            <p>תודה שהזמנתם מסלדיום! הסלט המעולה שהרכבתם בדרך אליכם!</p>
            <p>בינתיים, הנה מה ששמתם בסלט שלכם:</p>
            <ul>
                {props.ingredients}
            </ul>
            <p>וגם יצא לא יקר! רק {props.price.toFixed(2)} ש"ח</p>
            <div className="btnWrapper">
                <Button type="approve" clicked={props.clicked}>איזה כיף, אני רוצה שוב!</Button>
                <Button type="back" clicked={props.toggleOrderSummary}>אני רוצה חזרה לחשבון</Button>
            </div>
        </div>
    );
}

export default OrderSummary;