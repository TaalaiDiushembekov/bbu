import React from 'react';
import Container from "@material-ui/core/Container";
import Logo from "../Logo/Logo";
import './Main.css'

const Main = () => {
    return (
        <div className="main">
            <Container>
            <Logo/>
            <div className="main_text">
                <h2>
                    Точка — это свобода от бухгалтерии
                </h2>
            </div>
            </Container>
        </div>
    );
};

export default Main;
