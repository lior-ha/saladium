import React, { useState } from 'react';
import { connect } from 'react-redux';

import OrderSummary from '../../components/salad/orderSummary/orderSummary.component';

import FormComp from '../../components/form/form.component';
import { FormInputSingle, FormTextArea } from '../../components/form/input/input.component';

import Button from '../../components/UI/button/button.component'
import Modal from '../../components/UI/modal/modal.component';

import utensils from '../../assests/images/utensils-solid.svg';

import './checkout.scss';
import { Redirect } from 'react-router';

const Checkout = (props) => {
    const [showForm, setShowForm] = useState(false);
    const [orderSummary, setOrderSummary] = useState(false);
    const [showError, setShowError] = useState(false);
    const [redirect, setRedirect] = useState(false);
    const [userDetails, setUserDetails] = useState({name: '', email: '', more: ''});

    const handleSingleInputEvent = e => {
        const {name, value} = e.target;
        setUserDetails(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const handleFormSubmit = e => {
        e.preventDefault();
        if (!userDetails.name || !userDetails.email) {
            setShowError(!showError);
        } else {
            toggleOrderSummaryHandler();
        }
    }

    const toggleOrderSummaryHandler = () => {
        setOrderSummary(!orderSummary);
    }
    

    const backToBuildSalad = e => {
        e.preventDefault();
        setRedirect(<Redirect to="/buildSalad" />)
    }

    const processOrder = () => {
        setOrderSummary(!orderSummary);
        props.resetData();
        setRedirect(<Redirect to="/" />)
    }

    const ingredientsSum = props.currentIngredients.map(ing => {
        const ingTotalPrice = ing.amount * ing.price;
        return  <li key={ing.name + 'cko'} >
                    <p><span>{ing.label}</span> ({ing.amount})</p>
                    <i></i>
                    <p>{ingTotalPrice.toFixed(2)} &#8362;</p>
                </li>
    });
    
    return (
        <>
            {redirect}

            <Modal show={orderSummary} modalClosed={toggleOrderSummaryHandler}>
                <OrderSummary 
                    clicked={processOrder}
                    ingredients={ingredientsSum} 
                    price={props.totalPrice}
                    name={userDetails.name}
                />
            </Modal>

            <Modal show={showError} modalClosed={() => setShowError(!showError)}>
                <div>
                    ?????? ?????????? ???? ???? ?????? ????????????!
                </div>
            </Modal>

            <h1 className="title">?????????? ???????????</h1>
            <div className="checkoutBill">
                <div className="innerBox">
                    <p className="billTitle">???? ???? ?????? ???????</p>
                    <p className="billSubTitle">???????? ???????????? ???????? ????????:</p>
                    <ul>
                        {ingredientsSum}
                    </ul>
                    <p className="total">????"?? ?????? ??????: {props.totalPrice.toFixed(2)} &#8362;</p>
                    <img src={utensils} className="utensils" alt="????????" />
                </div>
                <div className={`formBg ${showForm && 'on'}`} onClick={() => setShowForm(false)}></div>
                
            </div>

            <FormComp submit={handleFormSubmit} classes={`form ${showForm && 'on'}`}>
                <p className="title">?????? ?????????? ?????????? ??????????????</p>
                <FormInputSingle 
                    name="name" 
                    label="????" 
                    type="text" 
                    value={userDetails.name}
                    handleChange={handleSingleInputEvent}
                    //required
                />
                <FormInputSingle 
                    name="email" 
                    label="????????????" 
                    type="email" 
                    value={userDetails.email}
                    handleChange={handleSingleInputEvent}
                    //required
                    ltr
                />
                <FormTextArea 
                    name="more" 
                    label="??????????"
                    value={userDetails.more}
                    handleChange={handleSingleInputEvent}
                />
                <div className="btnWrapper">
                    <Button type="back" clicked={backToBuildSalad}>??????, ????! ?????? ???? ?????????? ????????</Button>
                    <Button type="approve">?????????? ???????? ??'??????!</Button>
                </div>
            </FormComp>          
        </>
    );
    
};

const mapStateToProps = state => ({
    ingredients: state.ingredients,
    currentIngredients: state.ingredients.filter(ing => ing.amount > 0),
    totalPrice: state.totalPrice
});

const mapDispatchToProps = dispatch => ({
    resetData: () => dispatch({type: 'RESET'})
});

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);