import React, { useState, useEffect } from 'react';

import Backdrop from '../backdrop/backdrop.component';

import './modal.scss'

const Modal = (props) => {
    const [modalTop, setModalTop] = useState();
    useEffect(() => {
        setModalTop(window.innerHeight / 2 - document.querySelector('.modal').offsetHeight / 2);
    }, []);

    return (
        <>
            <Backdrop show={props.show} clicked={props.modalClosed} />
            <div className={`modal ${props.show ? 'show' : ''}`} style={{'top': modalTop}}>
                {props.children}
            </div>
        </>
    )
};

export default React.memo(Modal);