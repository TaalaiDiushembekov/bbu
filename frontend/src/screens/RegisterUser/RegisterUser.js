import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import TextField from "../../components/UI/Form/TextField/TextField";
import Button from "../../components/UI/Button/Button";
import "./RegisterUser.css";
import FormSelect from "../../components/UI/Form/FormSelect/FormSelect";
import {
    useCreateOrgMutation,
    useUpdateOrgMutation,
} from "../../redux/organization/org.api";

import Message from "../../components/message";

const ownership = ["Государственная", "Муниципальная", "Частная", "Иная"];
const civil = [
    "Физическое лицо",
    "Юридическое лицо",
    "Юридическое лицо (дочернее)",
    "Юридическое лицо (зависимое)",
];

const RegisterUser = ({ userId, userPassword, id, type, title, ...rest }) => {
    const [createOrg, result] = useCreateOrgMutation();
    const [updateOrg] = useUpdateOrgMutation();

    const [errorMsg, setErrorMsg] =  useState('')
    const history = useHistory();

    const update = type === 'patch' ? true : false

    const initialState = {
        userId: userId || '',
        is_checked: false,
        org_name: "",
        org_pin: "",
        org_director: "",
        org_director_passport: {
            series: "",
            authority: "",
            date: "",
        },
        org_accountant: "",
        org_accountant_passport: {
            series: "",
            authority: "",
            date: "",
        },
        org_responsible_person: "",
        org_phone: "",
        org_social_number: "",
        org_activity: "",
        org_ownership: "",
        org_legal: "",
        org_civil_status: "",
        org_email: "",
        password: userPassword || "",
        update
    };
    const [registerData, setRegisterData] = useState(initialState);

    useEffect(() => {
        if (rest) {
            setRegisterData((prevState) => {
                const newState = { ...prevState };

                Object.keys(rest).forEach((key) => {
                    if (newState.hasOwnProperty(key)) {
                        // if (key === "org_director_passport") {
                        //     newState.org_director_passport = {
                        //         ...newState.org_director_passport,
                        //         ...rest[key],
                        //     };
                        // } else {
                        newState[key] = rest[key];
                        // }
                    }
                });
                return newState;
            });
        }
    }, []);

    const isActiveHandler = (e) => {
        setRegisterData((prev) => ({ ...prev, is_checked: !prev.is_checked }));
    };

    const inputChangeHandler = (e) => {
        const { name, value } = e.target;
        setRegisterData((prev) => ({ ...prev, [name]: value }));
    };

    const inputChangeHandlerPassport = (e, title) => {
        const { name, value } = e.target;

        setRegisterData((prev) => ({
            ...prev,
            [title]: {
                ...registerData[title],
                [name]: value,
            },
        }));
    };

    const submitFormHandler = async (e) => {
        e.preventDefault();
        try {
            if (type === "approve") {
                const data = await updateOrg({
                    data: registerData,
                    id: id,
                }).unwrap();
                if (data?.orgData?.acknowledged) {
                    alert("Пользователь сохранен");
                }
            }
            else if (type === "patch") {
                const data = await updateOrg({
                    data: registerData,
                    id: id,
                }).unwrap();
                console.log(data)
                if (data?.orgData?.acknowledged) {
                    alert("Пользователь сохранен");
                } 
            }
            else {
                const orgData = await createOrg(registerData).unwrap();
                console.log(orgData);
                console.log(result)
            }
        } catch (error) {
            if(error){
                setErrorMsg(error.data.message)
            } 
        }
        

        // history.push("/organizations");
    };

    return (
        <div className="container">
            <div className="register-user">
                <h3 className="title">
                    {
                        errorMsg ?  <Message type="error">{errorMsg}</Message>
                        :
                        (!title ? "Форма регистрации нового пользователя" : title)
                        
                    }
                </h3>
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
                            type="number"
                            name="org_pin"
                            value={registerData.org_pin}
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
                        <p className="label-text">
                            Паспортные данные руководителя
                        </p>
                        <div className="passport-input-wrapper">
                            <div className="passport-input-wrapper-inner">
                                <TextField
                                    className="passport-input"
                                    type="text"
                                    name="series"
                                    value={
                                        registerData.org_director_passport
                                            .series
                                    }
                                    onChange={(e) =>
                                        inputChangeHandlerPassport(
                                            e,
                                            "org_director_passport"
                                        )
                                    }
                                    label="номер"
                                    labelClass="passport-label"
                                    required={true}
                                />
                            </div>
                            <div className="passport-input-wrapper-inner">
                                <TextField
                                    className="passport-input"
                                    type="text"
                                    name="authority"
                                    value={
                                        registerData.org_director_passport
                                            .authority
                                    }
                                    onChange={(e) =>
                                        inputChangeHandlerPassport(
                                            e,
                                            "org_director_passport"
                                        )
                                    }
                                    label="выдан"
                                    labelClass="passport-label"
                                    required={true}
                                />
                            </div>
                            <div className="passport-input-wrapper-inner">
                                <TextField
                                    className="date-input"
                                    type="date"
                                    name="date"
                                    value={
                                        registerData.org_director_passport.date
                                    }
                                    onChange={(e) =>
                                        inputChangeHandlerPassport(
                                            e,
                                            "org_director_passport"
                                        )
                                    }
                                    label="от"
                                    labelClass="passport-label"
                                    required={true}
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
                            required={true}
                        />
                    </div>
                    <div className="input-wrapper">
                        <p className="label-text">
                            Паспортные данные гл. бухгалтера
                        </p>
                        <div className="passport-input-wrapper">
                            <div className="passport-input-wrapper-inner">
                                <TextField
                                    className="passport-input"
                                    type="text"
                                    name="series"
                                    value={
                                        registerData.org_accountant_passport
                                            .series
                                    }
                                    onChange={(e) =>
                                        inputChangeHandlerPassport(
                                            e,
                                            "org_accountant_passport"
                                        )
                                    }
                                    label="номер"
                                    labelClass="passport-label"
                                    required={true}
                                />
                            </div>
                            <div className="passport-input-wrapper-inner">
                                <TextField
                                    className="passport-input"
                                    type="text"
                                    name="authority"
                                    value={
                                        registerData.org_accountant_passport
                                            .authority
                                    }
                                    onChange={(e) =>
                                        inputChangeHandlerPassport(
                                            e,
                                            "org_accountant_passport"
                                        )
                                    }
                                    label="выдан"
                                    labelClass="passport-label"
                                    required={true}
                                />
                            </div>
                            <div className="passport-input-wrapper-inner">
                                <TextField
                                    className="date-input"
                                    type="date"
                                    name="date"
                                    value={
                                        registerData.org_accountant_passport
                                            .date
                                    }
                                    onChange={(e) =>
                                        inputChangeHandlerPassport(
                                            e,
                                            "org_accountant_passport"
                                        )
                                    }
                                    label="от"
                                    labelClass="passport-label"
                                    required={true}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="input-wrapper">
                        <TextField
                            type="text"
                            name="org_responsible_person"
                            value={registerData.org_responsible_person}
                            onChange={inputChangeHandler}
                            label="Лицо ответственное за использование"
                            required={true}
                        />
                    </div>
                    <div className="input-wrapper">
                        <TextField
                            type="number"
                            name="org_phone"
                            value={registerData.org_phone}
                            onChange={inputChangeHandler}
                            label="Контактные телефоны"
                            required={true}
                        />
                    </div>
                    <div className="input-wrapper">
                        <TextField
                            type="number"
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
                            array={ownership}
                            name="org_ownership"
                            value={registerData.org_ownership}
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
                    {(type === "approve" || type === 'patch') ? (
                        <>
                            <div className="input-wrapper">
                                <TextField
                                    type="text"
                                    name="password"
                                    value={registerData.password}
                                    onChange={inputChangeHandler}
                                    label="Придумайте пароль для организации"
                                    required={true}
                                />
                            </div>
                            <div className="checkbox-wrapper">
                                <input 
                                    type="checkbox"
                                    checked={registerData.is_checked}
                                    name="is_checked"
                                    id="is_checked"
                                    onChange={isActiveHandler}
                                    label="Активация аккаунта"
                                    className="is-checked-input"
                                    // required={true}
                                />
                                <label className="is-checked-label" htmlFor="is_checked">Активация аккаунта</label>
                            </div>
                        </>
                    ) : null}
                    {type === "approve" ? (
                        <Button
                            type="submit"
                            title="Активировать"
                            className="register-btn"
                        />
                    ) : type === "patch" ? (
                        <Button
                            type="submit"
                            title="Обновить данные"
                            className="register-btn"
                        />
                    ) : (
                        <Button
                            type="submit"
                            title="Отправить"
                            className="register-btn"
                        />
                    )}
                </form>
            </div>
        </div>
    );
};

export default RegisterUser;
