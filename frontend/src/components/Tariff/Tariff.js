import React from 'react';
import './Tariff.css'
import Container from "@material-ui/core/Container";

const Tariff = () => {
    return (
        <div className="tariffs" id="tariffs">
            <Container>
                <div className="tariffs-one">
                    <div>
                        <h2>Тарифы</h2>
                        {/*<p>За спиной Своего человека — десятки специалистов разных направлений, которые берут на себя:</p>*/}
                    </div>
                    <div  className="tariffs-two">
                        <div className="tariffs-three">
                            <h2>"Нулевой"</h2>
                            {/*<div className="tariffs-icon">*/}
                            {/*    <Filter1 style={{  fontSize: 40  }} />*/}
                            {/*</div>*/}
                            {/*<h3>от 8000 сомов</h3>*/}
                            <p>
                                Консультации: 1 час
                            </p>
                            <p>
                                Подготовка и сдача отчетности
                            </p>
                        </div>
                        <div className="tariffs-three">
                            <h2>"Cтандарт"</h2>
                            {/*<div className="tariffs-icon2">*/}
                            {/*    <Filter2 style={{ fontSize: 40  }} />*/}
                            {/*</div>*/}
                            {/*<h3>от 17000 сомов</h3>*/}
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
                            {/*<div className="tariffs-icon3">*/}
                            {/*    <Filter3 style={{ fontSize: 40  }} />*/}
                            {/*</div>*/}
                            {/*<h3>от 22000 сомов</h3>*/}
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
                            {/*<div className="tariffs-icon4">*/}
                            {/*    <Filter4 style={{ fontSize: 40  }} />*/}
                            {/*</div>*/}
                            {/*<h3>от оборотов компании</h3>*/}
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
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Tariff;
