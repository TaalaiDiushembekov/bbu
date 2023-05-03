import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import TextField from "../../components/UI/Form/TextField/TextField";
import Button from "../../components/UI/Button/Button";
import './RegisterUser.css';
import FormSelect from "../../components/UI/Form/FormSelect/FormSelect";

const property = ['Государственная', 'Муниципальная', 'Частная', 'Иная'];
const civil = ['Физическое лицо', 'Юридическое лицо', 'Юридическое лицо (дочернее)', 'Юридическое лицо (зависимое)'];

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
        org_email: ''
    });

    const [date_director, setDate_director] = useState('');
    const [date_accountant, setDate_accountant] = useState('');

    const inputChangeHandler = (e) => {
        const {name, value} = e.target;
        setRegisterData(prev => ({...prev, [name]: value}));
        console.log(registerData);
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

        history.push('/');
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
                            value={registerData.org_name}
                            onChange={inputChangeHandler}
                            label="Наименование"
                            required={true}
                        />
                    </div>
                    <div className="input-wrapper">
                        <TextField
                            type="org_email" 
                            name="org_email" 
                            value={registerData.org_email}
                            required={true}
                            onChange={inputChangeHandler}
                            label="Почтовый адрес"
                        />
                    </div>
                    <div className="input-wrapper">
                        <TextField
                            type="text" 
                            name="PIN" 
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
                            value={registerData.responsible_person}
                            onChange={inputChangeHandler}
                            label="Лицо ответственное за использование"
                            required={true}
                        />
                    </div>
                    <div className="input-wrapper">
                        <TextField
                            type="text" 
                            name="org_phone" 
                            value={registerData.org_phone}
                            onChange={inputChangeHandler}
                            label="Контактные телефоны"
                            required={true}
                        />
                    </div>
                    <div className="input-wrapper">
                        <TextField
                            type="text" 
                            name="org_social_number" 
                            value={registerData.org_social_number}
                            onChange={inputChangeHandler}
                            label="Регистрационный номер Социального Фонда"
                            required={true}
                        />
                    </div>
                    <div className="input-wrapper">
                        <TextField
                            type="text" 
                            name="org_activity" 
                            value={registerData.org_activity}
                            onChange={inputChangeHandler}
                            label="Основной вид деятельности"
                            required={true}
                        />
                    </div>
                    <div className="input-wrapper">
                        <FormSelect
                            array={property}
                            name="property_type" 
                            value={registerData.property_type}
                            onChange={inputChangeHandler}
                            label="Форма собственности"
                            required={true}
                        />
                    </div>
                    <div className="input-wrapper">
                        <TextField
                            type="text" 
                            name="org_legal" 
                            value={registerData.org_legal}
                            onChange={inputChangeHandler}
                            label="Организационно-правовая форма"
                            required={true}
                        />
                    </div>
                    <div className="input-wrapper">
                    <FormSelect
                            array={civil}
                            name="org_civil_status" 
                            value={registerData.org_civil_status}
                            onChange={inputChangeHandler}
                            label="Гражданско-правовой статус"
                            required={true}
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