import React, { useState } from "react";
import TextField from "../../components/UI/Form/TextField/TextField";
import Button from "../../components/UI/Button/Button";
import './AddTariff.css';

const AddTariff = () => {
  const [tariff, setTariff] = useState({
    name: '',
    services: []
  });

  const inputHandler = e => {

  };

  return (
    <div className="container">
      <div className="addTariff">
        <form>
          <div className="input-wrapper">
            <TextField
              type="text"
              name="name"
              value={tariff.name}
              onChange={inputHandler}
              label="Наименование"
              required={true}
            />
          </div>
          <div className="input-wrapper">
            <TextField
              type="text"
              name="services"
              value={tariff.services}
              onChange={inputHandler}
              label="Услуги"
              required={true}
            />
          </div>
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

export default AddTariff;