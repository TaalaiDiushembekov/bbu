import React from 'react';
import Logo from '../../Logo/Logo';
import Header from '../../Header/Header';

const Layout = ({children}) => {
    return (
        <>
            <Logo/>
            <div>
                {children}
            </div>
            <Header/>
        </>
    );
};

export default Layout;