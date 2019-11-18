import React from 'react';
import './nav.styles.scss';

const Nav = () => (
    <div className="nav">
        <div className="nav-logo"><span>data</span>Fortaleza</div>
        <div className="nav-mainContent">
            <input type="text" placeholder="Pesquisar"/>
            <img src="" alt="Messages Icon"/>
            <img src="" alt="Notification Icon"/>
            <div className="nav-profile">
                <div className="nav-profilePicture">
                    <img src="../assets/img/profilePicture.svg" alt="Profile Picture"/>
                    <div className="nav-profilePictureStatus"></div>
                </div>
                <div className="nav-profileName">
                    <h3>Pedro Alencar</h3>
                    <img src="" alt="Profile Icon"/>
                </div>
            </div>
        </div>
    </div>
)

export default Nav;