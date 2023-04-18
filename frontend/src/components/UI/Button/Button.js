import React from 'react';
import "./Button.css";

const Button = ({title, className}) => {
    return (
        <button 
            type="button" 
            className={className}
        >
            {title}
        </button>
    )
};

export default Button;