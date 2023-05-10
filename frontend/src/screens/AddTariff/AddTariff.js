import React, { useState } from "react";
import TextField from "../../components/UI/Form/TextField/TextField";
import Button from "../../components/UI/Button/Button";
import './AddTariff.css';

const AddTariff = () => {
  const [name, setName] = useState('');

  const [services, setServices] = useState(['']);

  const addServiceInput = () => {
    console.log(services);
    if (services[services.length-1] !== '' ) {
      setServices(prev => [
        ...prev,
        ''
      ]);
    }
  };

  const removeService = index => {
    setServices([
      ...services.slice(0, index),
      ...services.slice(index + 1)
    ]);
  };

  const serviceChangeHandler = (e, index) => {
    setServices(prev => {
      const arr = [...prev];
      arr[index] = e.replace(/ /g, '');
      return arr;
    });
  };

  const submitFormHandler = async e => {
    e.preventDefault();
    const filledServices = services.filter(item => item !== "");
    console.log({name, services: filledServices});
  };

  return (
    <div className="container">
      <div className="addTariff">
        <h3 className="title">Добавление тарифа</h3>
        <form onSubmit={submitFormHandler}>
          <div className="input-wrapper">
            <TextField
              type="text"
              name="name"
              value={name}
              onChange={e => setName(e.target.value)}
              label="Наименование"
              required={true}
            />
          </div>
          {services.map((item, i) => (
            <div className="input-wrapper" key={i}>
              <label htmlFor="services">Услуга</label>
              <textarea 
                wrap="soft" 
                name="services"
                id="services"
                value={item}
                onChange={e => serviceChangeHandler(e.target.value, i)}
                label="Услуга"
                className='service-input'
              />
              <button 
                type="button" 
                className="tariff-small-btn remove-btn" 
                disabled={services.length === 1}
                onClick={() => removeService(i)}></button>
              <button 
                type="button" 
                className="tariff-small-btn add-btn" 
                onClick={addServiceInput}></button>
            </div>
          ))}
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