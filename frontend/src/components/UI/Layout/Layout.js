import React from 'react';
import Logo from '../../Logo/Logo';
import Header from '../../Header/Header';

const Layout = ({children}) => {
    return (
        <div>
            <Logo/>
            <Header/>
            {children}
        </div>
    );
};

export default Layout;