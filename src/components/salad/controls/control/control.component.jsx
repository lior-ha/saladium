import React from 'react';
import { connect } from 'react-redux';

import './control.scss';

const Control = (props) => (
    <div className="control">
        <span className={props.type} />
        <button 
            disabled={!props.disabledInfo}
            className="less" 
            onClick={() => props.onChangeAmount(-1, props.type)}
        >-</button>
        <div className="label">{props.label}</div>
        <button 
            className="more" 
            onClick={() => props.onChangeAmount(1, props.type)}
        >+</button>
    </div>
);

const mapDispatchToProps = dispatch => ({
    onChangeAmount: (amtSum, ing) => dispatch({type: 'CHANGE_AMOUNT', payload: { type: ing,  amount: amtSum}})
})

export default connect(null, mapDispatchToProps)(Control);