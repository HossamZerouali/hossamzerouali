import React from 'react';
import './DropdownMenu.css';

const DropdownMenu = () => {
    return (
        <div className="dropdown-menu show">
            <a href="/sobre-mi">About Me</a>
            <a href="/proyectos">Projects</a>
            <a href="/contacto">Contact</a>
        </div>
    );
}

export default DropdownMenu;
