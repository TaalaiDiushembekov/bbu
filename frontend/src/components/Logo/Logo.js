import React from 'react';
import logo from "../../images/logo.png";
import './Logo.css'
import Container from "@material-ui/core/Container";
import TelegramIcon from "@material-ui/icons/Telegram";
import InstagramIcon from "@material-ui/icons/Instagram";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";


const Logo = () => {
    return (
        <Container>
            <div className="logo_box">
                <div className="logo">
                    <img alt="" src={logo} />
                </div>

                <div className="logo_text">
                    <div className="social">
                        <div className="social-box">

                            <div className="social_icons">
                                <a href="https://t.me/+996707807507" target="_blank">
                                    <TelegramIcon/>
                                </a>
                            </div>
                            <div className="social_icons">
                                <a href="https://www.instagram.com/bbutochka/" target="_blank">
                                    <InstagramIcon/>
                                </a>
                            </div>
                            <div className="social_icons">
                                <a  href="https://wa.me/+996707807507" target="_blank">
                                    <WhatsAppIcon/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <p>+996 707 807 507</p>
                </div>
            </div>
        </Container>
    );
};

export default Logo;
