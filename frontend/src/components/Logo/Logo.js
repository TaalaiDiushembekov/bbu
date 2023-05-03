import React from 'react';
import {Link} from "react-router-dom";
import logo from "../../images/logo.png";
import './Logo.css'
import Container from "@material-ui/core/Container";
import TelegramIcon from "@material-ui/icons/Telegram";
import InstagramIcon from "@material-ui/icons/Instagram";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";


const Logo = () => {
    return (
        <div>
            
        <>
            <div className="logo_box">
                <Link to='/' className="logo">
                    <img alt="logo" src={logo} />
                </Link>

                <div className="logo_text">
                    <div className="social">
                        <div className="social-box">
                            <div className="social_icons">
                                <a href="https://t.me/+996707807507">
                                    <TelegramIcon/>
                                </a>
                            </div>
                            <div className="social_icons">
                                <a href="https://www.instagram.com/bbutochka/">
                                    <InstagramIcon/>
                                </a>
                            </div>
                            <div className="social_icons">
                                <a  href="https://wa.me/+996707807507">
                                    <WhatsAppIcon/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <p>+996 707 807 507</p>
                </div>
            </div>
        </>
    
        </div>
    );
};

export default Logo;
