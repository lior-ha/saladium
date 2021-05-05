import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import  { Redirect } from 'react-router-dom';

import Salad from '../../components/salad/salad.component';
import Controls from '../../components/salad/controls/controls.component';

import './saladBuilder.scss';

const SaladBuilder = (props) => {
    const [canOrder, setCanOrder] = useState(false);
    const [redirect, setRedirect ]= useState()

    useEffect(() => {
        if (props.totalPrice > 0) {
            setCanOrder(true);
        } else {
            setCanOrder(false);
        }
    }, [props.totalPrice]);

    const donePrerping = () => {
        setRedirect(<Redirect to="/checkout" />)
    }

    return (
        
            <div className="builderWrapper">
                {redirect}
                <Controls 
                    orderable={canOrder}
                    price={props.totalPrice}
                    ingredients={props.ingredients}
                    donePrerping={donePrerping}
                />
                <Salad currentIngredients={props.currentIngredients} />
            </div>
        
    )
};

const mapDispatchToProps = dispatch => ({
    onChangeAmount: (ing) => dispatch({type: 'CHANGE_AMOUNT', payload: { type: ing,  amount: 1}})
});

const mapStateToProps = state => ({
    ingredients: state.ingredients,
    currentIngredients: state.ingredients.filter(ing => ing.amount > 0),
    totalPrice: state.totalPrice
});

export default connect(mapStateToProps, mapDispatchToProps)(SaladBuilder);