import React from 'react';
import "./Button.css";

const Button = ({title, className, type, onClick}) => {
    return (
        <button 
            type={type} 
            className={className}
            onClick={onClick}
        >
            {title}
        </button>
    )
};

export default Button;