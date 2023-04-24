import React from "react";
import PropTypes from 'prop-types';
import './TextField.css';

const TextField = ({name, id, onChange, label, value, required, type}) => {
    return (
        <>
            <label htmlFor={id}>{label}</label>
            <input 
                type={type} 
                name={name}
                id={id}
                value={value}
                required={required}
                onChange={onChange}
            />
        </>
    )
};

TextField.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    required: PropTypes.bool,
    type: PropTypes.string.isRequired,
};

export default TextField;