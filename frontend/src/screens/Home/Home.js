import React from 'react';
import Header from "../../components/Header/Header.js";
import Logo from "../../components/Logo/Logo";
import "./Home.css";

const Home = () => {
    return (
        <>
            <header>
                <Header/>
            </header>
            <main className="main">
                <div className='container'>
                    <Logo/>
                    <div className="main_text">
                        <h2>Точка — это свобода от бухгалтерии</h2>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Home;
