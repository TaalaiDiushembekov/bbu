import React from 'react';
import "./Button.css";

const Button = ({title, className, type}) => {
    return (
        <button 
            type={type} 
            className={className}
        >
            {title}
        </button>
    )
};

export default Button;