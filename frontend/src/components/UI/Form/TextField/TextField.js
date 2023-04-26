import React from "react";
import PropTypes from 'prop-types';
import './TextField.css';

const TextField = ({name, onChange, label, value, required, type, className, labelClass, pattern, placeholder}) => {
    return (
        <>
            <label className={labelClass} htmlFor={name}>{label}</label>
            <input 
                type={type} 
                name={name}
                id={name}
                value={value}
                required={required}
                onChange={onChange}
                className={className}
                pattern={pattern}
                placeholder={placeholder}
            />
        </>
    )
};

TextField.propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    required: PropTypes.bool,
    type: PropTypes.string.isRequired,
    className: PropTypes.string,
    labelClass: PropTypes.string,
    pattern: PropTypes.string,
};

export default TextField;