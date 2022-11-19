import React from 'react';
import '../css/Header/Header.css';
import Logo from '../Image/logo.png';

const Header: React.FC = () => {
    return (
        <div>
            <header className="page-header">
                <img className="logo" src={Logo} alt="Логотип" />
                <p className="page-name">FastReport Cloud</p>
            </header>
        </div>
    )
}

export default Header