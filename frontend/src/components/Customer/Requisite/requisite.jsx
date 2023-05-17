import React, { forwardRef } from "react";
import './requisite.css'


const Requisite = forwardRef(({ org }, ref) => {
    return (
        <div ref={ref} className="requisite">
            <h2>Organization Profile</h2>
            <p>Название: {org.org_name}</p>
            <p>ПИН: {org.org_pin}</p>
            <p>Директор: {org.org_director}</p>
            <p>
                Серия паспорта директора:{" "}
                {org.org_director_passport.series}
            </p>
            <p>
                Орган выдачи паспорта директора:{" "}
                {org.org_director_passport.authority}
            </p>
            <p>
                Дата выдачи паспорта директора:{" "}
                {org.org_director_passport.date}
            </p>
            <p>Бухгалтер: {org.org_accountant}</p>
            <p>
                Серия паспорта бухгалтера:{" "}
                {org.org_accountant_passport.series}
            </p>
            <p>
                Орган выдачи паспорта бухгалтера:{" "}
                {org.org_accountant_passport.authority}
            </p>
            <p>
                Дата выдачи паспорта бухгалтера:{" "}
                {org.org_accountant_passport.date}
            </p>
            <p>Ответственное лицо: {org.org_responsible_person}</p>
            <p>Телефон: {org.org_phone}</p>
            <p>Социальный номер: {org.org_social_number}</p>
            <p>Деятельность: {org.org_activity}</p>
            <p>Форма собственности: {org.org_ownership}</p>
            <p>Юридическая форма: {org.org_legal}</p>
            <p>Правовой статус: {org.org_civil_status}</p>
            <p>Email: {org.org_email}</p>
        </div>
    );
});

export default Requisite;
