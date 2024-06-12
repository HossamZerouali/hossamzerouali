import React, { useState } from 'react';
import './Header.css';
import DropdownMenu from '../Dropdown/DropdownMenu';

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }

    return (
        <div className="header">
            <div className="leftside">
                <a className='name' href="/">Hossam Zerouali</a>
            </div>
            <div className="rightside">
                <a className="option" href="/sobre-mi">Sobre Mi</a>
                <a className="option" href="/proyectos">Proyectos</a>
                <a className="option" href="/contacto">Contacto</a>
            </div>
            <div className="menu-icon" onClick={toggleMenu}>
                <img src="https://api.iconify.design/heroicons-solid:menu.svg?color=rgb(111, 184, 159)" alt="Menu Icon" />
            </div>
            {showMenu && <DropdownMenu />}
        </div>
    );
}

export default Header;
