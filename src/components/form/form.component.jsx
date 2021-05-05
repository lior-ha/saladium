import React from 'react';

import './form.scss';

const FormComp = (props) => (
    <form onSubmit={props.submit} className={props.classes}>
        {props.children}
    </form>
);

export default FormComp;