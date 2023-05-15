import React, { useState } from 'react';
import FileInput from "../../components/UI/Form/FileInput/FileInput";
import Button from "../../components/UI/Button/Button";
import './AddPartner.css';

const AddPartner = () => {
  const [image, setImage] = useState(null);

  const fileChangeHandler = e => {
    const file = e.target.files[0];
    setImage(file);
  };

  const submitFormHandler = e => {
    e.preventDefault();
    const formData = new FormData();

    formData.append('image', image);
  };

  return (
    <div className="container">
      <div className="add-tariff">
        <h3 className="title">Добавление партнера</h3>
        <form onSubmit={submitFormHandler}>
          <FileInput
            label='Логотип партнера'
            name='image'
            onChange={fileChangeHandler}
            value={image}
            accept={'.png, .jpg, .jpeg, .pdf'}
          />
          <Button
            type="submit"
            title="Сохранить"
            className="register-btn"
          />
        </form>
      </div>
    </div>
  )
};

export default AddPartner;