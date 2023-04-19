import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Pagination} from "swiper";
import './Services.css'

const Services = () => {
    return (
        <div>
            <div className="service" id="services">
            <div className='container'>
                {/*<h2>Бухгалтерские услуги заказать недорого </h2>*/}
                <p>Приоритетные направления деятельности нашей компании - оказание</p>
                <div className="service-container">
                    {/*<Swiper*/}
                    {/*    // spaceBetween={20}*/}
                    {/*    slidesPerView={1}*/}
                    {/*    centeredSlides={true}*/}
                    {/*    onSlideChange={() => console.log('slide change')}*/}
                    {/*    onSwiper={(swiper) => console.log(swiper)}*/}
                    {/*    autoplay={{*/}
                    {/*        delay: 8000,*/}
                    {/*        disableOnInteraction: false,*/}
                    {/*    }}*/}
                    {/*    loop={true}*/}
                    {/*    pagination={{*/}
                    {/*        dynamicBullets: true,*/}
                    {/*    }}*/}
                    {/*    modules={[Pagination, Autoplay]}*/}
                    {/**/}
                    {/**/}
                    {/*>*/}
                    {/*    <SwiperSlide>*/}
                            <div className="service-text">
                                <p>Бухгалтерских услуг</p>
                                <ul>
                                    <li>Бухгалтерское обслуживание бизнеса</li>
                                    <li>Комплексное бухгалтерское сопровождение</li>
                                    <li>Разовые бухгалтерские услуги (все вопросы, которые Вы можете задать нам за один
                                        час)
                                    </li>
                                    <li>Составление и сдача отчётности по Соц.Фонду</li>
                                    <li>Сдача нулевой отчётности</li>
                                    <li>Формирование и сдача Налоговой Декларации</li>
                                    <li>Восстановление учёта</li>
                                </ul>
                            </div>
                        {/*</SwiperSlide>*/}
                        {/*<SwiperSlide>*/}
                            <div className="service-text">
                                <p>Аудиторских услуг</p>
                                <ul>
                                    <li>Комплексный аудит</li>
                                    <li>Проверка документов</li>
                                    <li>Контроль корректности сданных отчётов</li>

                                </ul>
                            </div>
                        {/*</SwiperSlide>*/}
                        {/*<SwiperSlide>*/}
                            <div className="service-text">
                                <p>Юридических услуг</p>
                                <ul>
                                    <li>Регистрация фирм под ключ</li>
                                    <li>Изготовление печатей</li>
                                    <li>Открытие кабинета налогоплательщика</li>
                                    <li>Получение ЭП-рутокен</li>
                                    <li>Постановка на учёт по НДС</li>
                                    <li>Ликвидация</li>
                                    <li>Маркировка товаров</li>
                                </ul>
                            </div>
                        {/*</SwiperSlide>*/}
                    {/*</Swiper>*/}
                </div>
            </div>
        </div>
        </div>
    );
};

export default Services;
