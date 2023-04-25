import React from 'react';
import {Link} from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import {Swiper, SwiperSlide} from "swiper/react";
import Partners from "../../components/partners";
import Button from "../../components/UI/Button/Button";
import './About.css';

const About = () => {
    return (
        <div className="container">
            <div className="menuList">
                <div className="menuList_box">
                    <div className="menuList_social"></div>
                    <div className="menuList-item">
                        <Link to="/tariffs">
                            <Button
                                type="button"
                                className="about-menu"
                                title="тарифы"
                            />
                        </Link>
                    </div>
                    <div className="menuList-item">
                        <Link to="/services">
                            <Button
                                type="button"
                                className="about-menu"
                                title="услуги"
                            />
                        </Link>
                    </div>
                    <div className="our-partners">
                        <div className="our-partners-text">
                            <h2>Наши партнеры</h2>
                        </div>
                        <div className="our-partners-box">
                            <Swiper
                                /*    // spaceBetween={20}*/
                                /*    slidesPerView={1}*/
                                /*    centeredSlides={true}*/
                                /*    onSlideChange={() => console.log('slide change')}*/
                                /*    onSwiper={(swiper) => console.log(swiper)}*/
                                /*    autoplay={{*/
                                /*        delay: 2500,*/
                                /*        disableOnInteraction: false,*/
                                /*    }}*/
                                /*    loop={true}*/
                                /*    pagination={{*/
                                /*        dynamicBullets: true,*/
                                /*    }}*/
                                /*    modules={[Pagination, Autoplay]}*/
                                /**/
                                /**/
                            >
                                <SwiperSlide>
                                    {/*<img*/}
                                    {/*    alt=""*/}
                                    {/*    src={partners1}*/}
                                    {/*/>*/}
                                    <Card>
                                        <CardActionArea>
                                            {/*<CardMedia*/}
                                            {/*    component="img"*/}
                                            {/*    // alt="Contemplative Reptile"*/}
                                            {/*    height="140"*/}
                                            {/*    image={partners.image}*/}
                                            {/**/}
                                            {/*    // title="Contemplative Reptile"*/}
                                            {/*/>*/}

                                            {/*<>*/}
                                            {/*    {*/}
                                            {/*        // partners.map((partner) => (*/}
                                            {/*        //     <Partner partner={partner}/>*/}
                                            {/*        // ))*/}
                                            {/*}*/}
                                            {/*</>*/}
                                        </CardActionArea>
                                    </Card>
                                </SwiperSlide>
                                {/*<SwiperSlide>*/}
                                {/*    <img alt="" src={partners2} />*/}
                                {/*</SwiperSlide>*/}
                                {/*<SwiperSlide><img alt="" src={partners3} /></SwiperSlide>*/}
                            </Swiper>
                            <Partners/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
