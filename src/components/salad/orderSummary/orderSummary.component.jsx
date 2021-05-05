import React from 'react';

import Button from '../../UI/button/button.component';

import './orderSummary.scss';

const OrderSummary = (props) => {
    return (
        <div className="orderSummary">
            <h3 className="title">בדרך אליכם!</h3>
            <p>היי {props.name}!</p>
            <p>תודה שהזמנתם מסלדיום! הסלט המעולה שהרכבתם בדרך אליכם!</p>
            <p>בינתיים, הנה מה ששמתם בסלט שלכם:</p>
            <ul>
                {props.ingredients}
            </ul>
            <p className="total">סה"כ רק {props.price.toFixed(2)} &#8362;</p>
            <div className="btnWrapper">
                <Button type="approve" clicked={props.clicked}>איזה כיף, תודה!</Button>
            </div>
        </div>
    );
}

export default OrderSummary;