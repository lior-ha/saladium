import React from 'react';

import './backdrop.scss';

const Backdrop = (props) => (
    props.show ? <div className="backdrop" onClick={props.clicked}></div> : null
);

export default Backdrop;