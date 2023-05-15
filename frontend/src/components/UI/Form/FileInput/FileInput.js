import React, {useEffect, useRef, useState} from "react";
import Button from "../../Button/Button";
import './FileInput.css';

const FileInput = ({onChange, name, label, required, value, accept}) => {
  const inputRef = useRef();
  const [filename, setFilename] = useState('');

  useEffect(() => {
    if (value) setFilename(value || value.name);
  }, [value]);

  const onFileChange = e => {
    if (e.target.files[0]) {
      setFilename(e.target.files[0].name);
    } else {
      setFilename(value || value.name || '');
    }

    onChange(e);
  };

  const activateInput = () => {
    inputRef.current.click();
  };

  return (
    <>
      <input
        type="file"
        name={name}
        className='disabled-input'
        onChange={onFileChange}
        ref={inputRef}
        accept={accept}
      />
      <div>
        <label className='file-input-label' htmlFor={name}>{label}</label>
        <input
          required={required}
          disabled
          name={name}
          label={label}
          value={filename}
          onClick={activateInput}
        />
        <Button
          type="button"
          title="Добавить"
          className="file-input-btn"
          onClick={activateInput} 
        />
      </div>
    </>
  );
};

export default FileInput;