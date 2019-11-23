import React from "react";
import Logo from "../../assets/img/logo.svg";
import MessageIcon from "../../assets/img/messageIcon.svg";
import NotificationIcon from "../../assets/img/notificationIcon.svg";
import ProfilePicture from "../../assets/img/profilePicture.svg";
import OpenProfileIcon from "../../assets/img/openProfileIcon.svg";
import SearchIcon from "../../assets/img/searchIcon.svg";
import "./nav.styles.scss";

const Nav = () => 
<div className="nav">
    <div className="nav--container">
        <img src={Logo} alt="Logo dataFortaleza"/>
        <div className="nav--status">
            <input placeholder="Pesquisar"/>
            <img className="nav--statusSearch" src={SearchIcon} alt="Pesquisar"/>
            <div className="nav--statusMessage">
                <img src={MessageIcon} alt="Mensagens"/>
                <div className="nav--statusMessageStatus">2</div>
            </div>
            <div className="nav--statusNotification">
                <img src={NotificationIcon} alt="Notificações"/>
                <div className="nav--statusNotificationStatus">2</div>
            </div>
            <div className="nav--profile">
                <div className="nav--profilePicture">
                    <img src={ProfilePicture} alt="Perfil"/>
                    <div className="nav--profileStatus"></div>
                </div>
                <div className="nav--profileName">
                    <h2>Pedro Alencar</h2>
                    <img src={OpenProfileIcon} alt="Ver Perfil"/>
                </div>
            </div>
        </div>
    </div>
</div>;

export default Nav;
