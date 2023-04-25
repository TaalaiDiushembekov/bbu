import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import TextField from "../../components/UI/TextField/TextField";
import Button from "../../components/UI/Button/Button";
import './RegisterUser.css';

const RegisterUser = () => {
    const history = useHistory();

    const [registerData, setRegisterData] = useState({
        org_name: '',
        PIN: '',
        org_director: '',
        org_director_passport: {
            series_dir: '',
            authority_dir: '',
            date_dir: ''
        },
        org_accountant: '',
        org_accountant_passport: {
            series_acc: '',
            authority_acc: '',
            date_acc: ''
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

    const [date_director, setDate_director] = useState('');
    const [date_accountant, setDate_accountant] = useState('');

    const inputChangeHandler = (e) => {
        const {name, value} = e.target;
        setRegisterData(prev => ({...prev, [name]: value}))
    };

    const inputChangeHandlerPassport = (e, title) => {
        const {name, value} = e.target;

        setRegisterData(prev => ({
            ...prev,
            [title]: {
                ...registerData[title],
                [name]: value,
            }
        }));
    };

    const submitFormHandler = async e => {
        e.preventDefault();
        console.log(date_accountant);
        setRegisterData(prev => ({
            ...prev,
            org_director_passport: {
                ...registerData.org_director_passport,
                date_dir: date_director,
            },
            org_accountant_passport: {
                ...registerData.org_accountant_passport,
                date_acc: date_accountant,
            }
        }));

        // history.push('/');
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
                        <p className="label-text">Паспортные данные руководителя</p>
                        <div className="passport-input-wrapper">
                            <div className="passport-input-wrapper-inner">
                                <TextField
                                    className="passport-input"
                                    type="text" 
                                    name="series_dir" 
                                    id="series_dir"
                                    value={registerData.org_director_passport.series_dir}
                                    onChange={(e) => inputChangeHandlerPassport(e, 'org_director_passport')}
                                    label="номер"
                                    labelClass="passport-label"
                                />
                            </div>
                            <div className="passport-input-wrapper-inner">
                                <TextField
                                    className="passport-input"
                                    type="text" 
                                    name="authority_dir" 
                                    id="authority_dir"
                                    value={registerData.org_director_passport.authority_dir}
                                    onChange={(e) => inputChangeHandlerPassport(e, 'org_director_passport')}
                                    label="выдан"
                                    labelClass="passport-label"
                                />
                            </div>
                            <div className="passport-input-wrapper-inner">
                                <TextField
                                    className="date-input"
                                    type="date" 
                                    name="date_director" 
                                    id="date_dir"
                                    value={date_director}
                                    onChange={(e) => setDate_director(e.target.value)}
                                    label="от"
                                    labelClass="passport-label"
                                />
                            </div>
                        </div>
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
                        <p className="label-text">Паспортные данные гл. бухгалтера</p>
                        <div className="passport-input-wrapper">
                            <div className="passport-input-wrapper-inner">
                                <TextField
                                    className="passport-input"
                                    type="text" 
                                    name="series_acc" 
                                    id="series_acc"
                                    value={registerData.org_accountant_passport.series_acc}
                                    onChange={(e) => inputChangeHandlerPassport(e, 'org_accountant_passport')}
                                    label="номер"
                                    labelClass="passport-label"
                                />
                            </div>
                            <div className="passport-input-wrapper-inner">
                                <TextField
                                    className="passport-input"
                                    type="text" 
                                    name="authority_acc" 
                                    id="authority_acc"
                                    value={registerData.org_accountant_passport.authority_acc}
                                    onChange={(e) => inputChangeHandlerPassport(e, 'org_accountant_passport')}
                                    label="выдан"
                                    labelClass="passport-label"
                                />
                            </div>
                            <div className="passport-input-wrapper-inner">
                                <TextField
                                    className="date-input"
                                    type="date" 
                                    name="date_accountant" 
                                    id="date_acc"
                                    value={date_accountant}
                                    onChange={(e) => setDate_accountant(e.target.value)}
                                    label="от"
                                    labelClass="passport-label"
                                />
                            </div>
                        </div>
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
                            name="org_legal" 
                            id="org_legal"
                            value={registerData.org_legal}
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
                    <Button
                        type="submit"
                        title="Отправить"
                        className="register-btn"
                    />
                </form>
            </div>
        </div>
    )
};

export default RegisterUser;