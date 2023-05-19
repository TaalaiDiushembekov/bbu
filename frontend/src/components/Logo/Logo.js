import React from 'react';
import {Link} from "react-router-dom";
import logo from "../../images/logo.png";
import TelegramIcon from "@material-ui/icons/Telegram";
import InstagramIcon from "@material-ui/icons/Instagram";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import './Logo.css'

const Logo = () => {
    return (
        <div className="logo_box">
            <Link to='/' className="logo">
                <img alt="logo" src={logo} />
            </Link>
            <div className="logo_text">
                <Link className="apply-link logo-item" to='/user-registration'>
                    Подать заявку
                </Link>
                <div className="social logo-item">
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
                <p className='phone logo-item'>+996 707 807 507</p>
            </div>
        </div>
    );
};

export default Logo;
