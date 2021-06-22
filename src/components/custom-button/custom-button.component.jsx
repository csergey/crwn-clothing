import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({buttonText, ...otherProps}) => (
    <button className='custom-button' {...otherProps}>{buttonText}</button>
);
export default CustomButton;