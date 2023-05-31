import React from "react";
import PropTypes from "prop-types";
import "./TextField.css";

const TextField = ({
    field,
    name,
    onChange,
    onClick,
    label,
    value,
    required,
    type,
    className,
    labelClass,
    pattern,
    placeholder,
    checked,
}) => {
    return (
        <>
            <label className={labelClass} htmlFor={name}>
                {label}
            </label>
            {field ? (
                <textarea 
                
                className={className}

                onChange={onChange}
                name={name}
                value={value}/>

                
                
            ) : (
                <input
                    type={type}
                    name={name}
                    id={name}
                    value={value}
                    required={required}
                    onChange={onChange}
                    onClick={onClick}
                    className={className}
                    pattern={pattern}
                    placeholder={placeholder}
                    checked={checked}
                />
            )}
        </>
    );
};

TextField.propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    label: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.bool,
    ]),
    required: PropTypes.bool,
    type: PropTypes.string.isRequired,
    className: PropTypes.string,
    labelClass: PropTypes.string,
    pattern: PropTypes.string,
};

export default TextField;
