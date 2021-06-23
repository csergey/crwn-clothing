import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({buttonText, isGoogleSignIn, ...otherProps}) => (
    <button 
        className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
            {buttonText}
    </button>
);
export default CustomButton;