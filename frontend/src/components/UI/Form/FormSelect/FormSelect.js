import React from "react";
import "./FormSelect.css";

const FormSelect = ({array, onChange, label, required, name, value}) => {
    return (
        <>
            <label htmlFor={name}> {label} </label>
            <select 
                id={name}
                onChange={onChange}
                required={required}
                name={name}
                value={value}
            >
                {array.map((item) => (
                    <option key={item} value={item}> {item} </option>
                ))}
            </select>    
        </>
    )
};

export default FormSelect;