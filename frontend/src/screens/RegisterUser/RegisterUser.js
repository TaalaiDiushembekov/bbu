import React, { useState } from "react";
import TextField from "../../components/UI/TextField/TextField";
import './RegisterUser.css';

const RegisterUser = () => {
    const [registerData, setRegisterData] = useState({
        org_name: '',
        PIN: '',
        org_director: '',
        org_director_passport: {
            series: '',
            authority: '',
            date: ''
        },
        org_accountant: '',
        org_accountant_passport: {
            series: '',
            authority: '',
            date: ''
        },
        responsible_person: '',
        org_phone: '',
        org_social_number: '',
        org_activity: '',
        property_type: '',
        org_legal: '',
        org_civil_status: '',
        email: ''
    });

    const inputChangeHandler = (e) => {
        const {name, value} = e.target;
        setRegisterData(prev => ({...prev, [name]: value}))
    };

    const submitFormHandler = async e => {
        e.preventDefault();
    };

    return (
        <div className='container'>
            <div className="register-user">
                <h3 className="title">Форма регистрации нового пользователя</h3>
                <form onSubmit={submitFormHandler}>
                    <div className="input-wrapper">
                        <TextField
                            type="text" 
                            name="org_name" 
                            id="org_name"
                            value={registerData.org_name}
                            required={true}
                            onChange={inputChangeHandler}
                            label="Наименование"
                        />
                    </div>
                    <div className="input-wrapper">
                        <TextField
                            type="email" 
                            name="email" 
                            id="email"
                            value={registerData.email}
                            required={true}
                            onChange={inputChangeHandler}
                            label="Почтовый адрес"
                        />
                    </div>
                    <div className="input-wrapper">
                        <TextField
                            type="text" 
                            name="PIN" 
                            id="PIN"
                            value={registerData.PIN}
                            required={true}
                            onChange={inputChangeHandler}
                            label="ИНН"
                        />
                    </div>
                    <div className="input-wrapper">
                        <TextField
                            type="text" 
                            name="org_director" 
                            id="org_director"
                            value={registerData.org_director}
                            required={true}
                            onChange={inputChangeHandler}
                            label="Руководитель"
                        />
                    </div>
                    <div className="input-wrapper">
                        <TextField
                            type="text" 
                            name="PIN" 
                            id="PIN"
                            value={registerData.PIN}
                            required={true}
                            onChange={inputChangeHandler}
                            label="Паспорт"
                        />
                    </div>
                    <div className="input-wrapper">
                        <TextField
                            type="text" 
                            name="org_accountant" 
                            id="org_accountant"
                            value={registerData.org_accountant}
                            onChange={inputChangeHandler}
                            label="Главный бухгалтер"
                        />
                    </div>
                    <div className="input-wrapper">
                        <TextField
                            type="text" 
                            name="org_legal" 
                            id="org_legal"
                            value={registerData.org_legal}
                            onChange={inputChangeHandler}
                            label="Паспорт"
                        />
                    </div>
                    <div className="input-wrapper">
                        <TextField
                            type="text" 
                            name="responsible_person" 
                            id="responsible_person"
                            value={registerData.responsible_person}
                            required={true}
                            onChange={inputChangeHandler}
                            label="Лицо ответственное за использование"
                        />
                    </div>
                    <div className="input-wrapper">
                        <TextField
                            type="text" 
                            name="org_phone" 
                            id="org_phone"
                            value={registerData.org_phone}
                            required={true}
                            onChange={inputChangeHandler}
                            label="Контактные телефоны"
                        />
                    </div>
                    <div className="input-wrapper">
                        <TextField
                            type="text" 
                            name="org_social_number" 
                            id="org_social_number"
                            value={registerData.org_social_number}
                            required={true}
                            onChange={inputChangeHandler}
                            label="Регистрационный номер Социального Фонда"
                        />
                    </div>
                    <div className="input-wrapper">
                        <TextField
                            type="text" 
                            name="org_activity" 
                            id="org_activity"
                            value={registerData.org_activity}
                            required={true}
                            onChange={inputChangeHandler}
                            label="Основной вид деятельности"
                        />
                    </div>
                    <div className="input-wrapper">
                        <TextField
                            type="text" 
                            name="property_type" 
                            id="property_type"
                            value={registerData.property_type}
                            required={true}
                            onChange={inputChangeHandler}
                            label="Форма собственности"
                        />
                    </div>
                    <div className="input-wrapper">
                        <TextField
                            type="text" 
                            name="property_type" 
                            id="property_type"
                            value={registerData.property_type}
                            required={true}
                            onChange={inputChangeHandler}
                            label="Организационно-правовая форма"
                        />
                    </div>
                    <div className="input-wrapper">
                        <TextField
                            type="text" 
                            name="org_civil_status" 
                            id="org_civil_status"
                            value={registerData.org_civil_status}
                            required={true}
                            onChange={inputChangeHandler}
                            label="Гражданско-правовой статус"
                        />
                    </div>
                </form>
            </div>
        </div>
    )
};

export default RegisterUser;