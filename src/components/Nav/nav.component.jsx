import React from 'react';
import './nav.styles.scss';

const Nav = () => (
    <div className="nav">
        <div className="nav-logo">DataFortaleza</div>
        <div className="nav-mainContent">
            <input type="text" placeholder="Buscar"/>
            <div className="nav-paths">
                <ul className="nav-paths--list">
                    <li>Home</li>
                    <li>Sobre</li>
                    <li>Contatos</li>
                </ul>
            </div>
        </div>
    </div>
)

export default Nav;