import React from 'react';
import './DropdownMenu.css';

const DropdownMenu = () => {
    return (
        <div className="dropdown-menu show">
            <a href="/sobre-mi">Sobre Mi</a>
            <a href="/proyectos">Proyectos</a>
            <a href="/contacto">Contacto</a>
        </div>
    );
}

export default DropdownMenu;
