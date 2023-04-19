import React from 'react';
import "./Tariffs.css";

const tariffs = [
    {title: 'Нулевой', consultings: '1 час', reportSubmission: 'Подготовка и сдача отчетности'},
    {
        title: 'Cтандарт', 
        oneC:'до 15 документов', 
        consultings: '10 часов', 
        reportSubmission: 'Подготовка и сдача отчетности', 
        salary: 'Расчет З/П: до 5 чел.', 
        taxes: 'Расчет налогов и СоцФонда',
        accounts: 'Подготовка счетов',
        ib: 'Подготовка платежек в Интернет- банкинг'
    },
    {
        title: 'Бизнес Плюс', 
        oneC:'до 20 документов', 
        consultings: 'не ограничено', 
        reportSubmission: 'Подготовка и сдача отчетности', 
        salary: 'Расчет З/П', 
        taxes: 'Расчет налогов и СоцФонда',
        accounts: 'Подготовка счетов',
        ib: 'Подготовка платежек в Интернет- банкинг'
    },
    {
        title: 'Всё включено', 
        oneC:' ', 
        consultings: 'не ограничено', 
        reportSubmission: 'Подготовка и сдача отчетности', 
        salary: 'Расчет З/П', 
        taxes: 'Расчет налогов и СоцФонда',
        accounts: 'Подготовка счетов',
        ib: 'Подготовка платежек в Интернет- банкинг'
    },
];

const Tariffs = () => {
    return (
        <div>
            <div className="tariffs" id="tariffs">
            <div className='container'>
                <div className="tariffs-one">
                    <div>
                        <h2>Тарифы</h2>
                        {/*<p>За спиной Своего человека — десятки специалистов разных направлений, которые берут на себя:</p>*/}
                    </div>
                    <div  className="tariffs-two">
                        {tariffs.map(tarif => (
                            <div className="tariffs-three" key={tarif.title}>
                                <h2>{tarif.title}</h2>
                                {/* <div className="tariffs-icon"> */}
                                {/*    <Filter1 style={{  fontSize: 40  }} />*/}
                                {/*</div>*/}
                                {/* <h3>от 8000 сомов</h3> */}
                                <ul>
                                    {tarif.oneC && <li> Ведение учета в 1С: {tarif.oneC}</li>}
                                    <li>Консультации: {tarif.consultings}</li>
                                    <li>Подготовка и сдача отчетности</li>
                                    {tarif.salary && <li>{tarif.salary}</li>}
                                    {tarif.taxes && <li>{tarif.taxes}</li>}
                                    {tarif.accounts && <li>{tarif.accounts}</li>}
                                    {tarif.ib && <li>{tarif.ib}</li>}
                                </ul>
                            </div>
                        ))}
                        {/* <div className="tariffs-three">
                            <h2>"Нулевой"</h2>
                            <div className="tariffs-icon">
                               <Filter1 style={{  fontSize: 40  }} />
                            </div>
                            <h3>от 8000 сомов</h3>
                            <p>
                                Консультации: 1 час
                            </p>
                            <p>
                                Подготовка и сдача отчетности
                            </p> 
                        </div>
                        <div className="tariffs-three">
                            <h2>"Cтандарт"</h2>
                            <div className="tariffs-icon2">
                               <Filter2 style={{ fontSize: 40  }} />
                            </div>
                            <h3>от 17000 сомов</h3>
                            <p>
                                Ведение учета в 1С: до 15 документов
                            </p>
                            <p>
                                Консультации: 10 часов
                            </p>
                            <p>
                                Подготовка и сдача отчетности
                            </p>
                            <p>
                                Расчет З/П: до 5 чел.
                            </p>
                            <p>
                                Расчет налогов и СоцФонда
                            </p>
                            <p>
                                Подготовка счетов
                            </p>
                            <p>
                                Подготовка платежек в Интернет- банкинг
                            </p>
                        </div>
                        <div className="tariffs-three">
                            <h2>"Бизнес Плюс"</h2>
                            <div className="tariffs-icon3">
                               <Filter3 style={{ fontSize: 40  }} />
                            </div>
                            <h3>от 22000 сомов</h3>
                            <p>
                                Ведение учета в 1С: до 20 документов
                            </p>
                            <p>
                                Консультации: не ограниченно
                            </p>
                            <p>
                                Подготовка и сдача отчетности
                            </p>
                            <p>
                                Расчет З/П
                            </p>
                            <p>
                                Расчет налогов и СоцФонда
                            </p>
                            <p>
                                Подготовка счетов
                            </p>
                            <p>
                                Подготовка платежек в Интернет- банкинг
                            </p>
                        </div>
                        <div className="tariffs-three">
                            <h2>"Все включено"</h2>
                            <div className="tariffs-icon4">
                               <Filter4 style={{ fontSize: 40  }} />
                            </div>
                            <h3>от оборотов компании</h3>
                            <p>
                                Ведение учета в 1С
                            </p>
                            <p>
                                Консультации: не ограниченно
                            </p>
                            <p>
                                Подготовка и сдача отчетности
                            </p>
                            <p>
                                Расчет З/П
                            </p>
                            <p>
                                Расчет налогов и СоцФонда
                            </p>
                            <p>
                                Подготовка счетов
                            </p>
                            <p>
                                Подготовка платежек в Интернет- банкинг
                            </p>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Tariffs;
