import React from 'react';

import './input.scss';

export const FormTextArea = ({handleChange, label, ...otherProps}) => (
    <div className="formInputSet textArea">
        <textarea className="formInput" onChange={handleChange} {...otherProps} />
        {
            label ?
            (<label className={`${otherProps.value ? 'shrink' : ''} inputLabel`}>
                {label}
            </label>)
            :
            null
        }
        
    </div> 
);
export const FormInputSingle = ({handleChange, ltr, label, ...otherProps}) => (
    <div className="formInputSet">
        <input className={`formInput ${ltr ? 'ltr' : ''}`} onChange={handleChange} {...otherProps} />
        {
            label ?
            (<label className={`${otherProps.value ? 'shrink' : ''} inputLabel`}>
                {label}
            </label>)
            :
            null
        }
        
    </div> 
);