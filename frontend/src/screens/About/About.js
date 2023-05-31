import React from 'react';
import {Link} from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import {Swiper, SwiperSlide} from "swiper/react";
import Partners from "../../components/partners";
import Button from "../../components/UI/Button/Button";
import './About.css';
import { useGetPartnersQuery } from '../../redux/partners/partner.api';
import { API } from '../../consts';

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
                            <Partners/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
