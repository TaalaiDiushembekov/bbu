import React from 'react';

import {Link} from "react-router-dom";
import './MenuList.css'
import TelegramIcon from '@material-ui/icons/Telegram'
import InstagramIcon from '@material-ui/icons/Instagram'
import WhatsAppIcon from '@material-ui/icons/WhatsApp'
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn'
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import {Swiper, SwiperSlide} from "swiper/react";
import Partners from "../partners.js";


const style = {
    justifyContent: "start",
    width: "100%",
    color: "white"
};

const MenuList = () => {
    return (
        <div className="menuList">
            <div className="menuList_box">
                <div className="menuList_social">

                </div>
                <div className="menuList_tariffs">
                    <Button sx={style}
                        // variant="contained"

                            component={Link}
                            to='/tariffs'

                    >
                        {/*<MonetizationOnIcon />*/}
                        тарифы
                    </Button>

                </div>
                <div className="menuList_services">
                    <Button sx={style}
                        // variant="outlined"
                            component={Link}
                            to='/services'>
                        {/*<MonetizationOnIcon />*/}
                        услуги
                    </Button>

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
                                <Card

                                >
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
                        <Partners />
                    </div>


                </div>
            </div>


        </div>
    );
};

export default MenuList;
