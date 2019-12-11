import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/logo.svg";
import MessageIcon from "../../assets/img/messageIcon.svg";
import NotificationIcon from "../../assets/img/notificationIcon.svg";
import ProfilePicture from "../../assets/img/profilePicture.svg";
import OpenProfileIcon from "../../assets/img/openProfileIcon.svg";
import SearchIcon from "../../assets/img/searchIcon.svg";
import "./nav.styles.scss";

class Nav extends Component {
  constructor() {
    super();

    this.state = {
      showMessages: false,
      showNotifications: false,
      showProfile: false
    };
  }

  openProfile = () => {
    this.setState({ showProfile: !this.state.showProfile });
  };

  openMessages = () => {
    this.setState({ showMessages: !this.state.showMessages });
  };

  openNotifications = () => {
    this.setState({ showNotifications: !this.state.showNotifications });
  };

  render() {
    const { showMessages, showNotifications, showProfile } = this.state;
    console.log(this.state);
    return (
      <div className="nav">
        <div className="nav--container">
          <Link to="/home">
            <img src={Logo} alt="Logo dataFortaleza" />
          </Link>
          <div className="nav--status">
            <input placeholder="Pesquisar" />
            <img
              className="nav--statusSearch"
              src={SearchIcon}
              alt="Pesquisar"
            />
            {showMessages ? (
              <div onClick={this.openMessages} className="nav--statusMessage">
                <img src={MessageIcon} alt="Mensagens" />
                <div className="nav--statusMessageStatus">2</div>
                <div className="nav--Messages"></div>
              </div>
            ) : (
              <div onClick={this.openMessages} className="nav--statusMessage">
                <img src={MessageIcon} alt="Mensagens" />
                <div className="nav--statusMessageStatus">2</div>
              </div>
            )}

            {showNotifications ? (
              <div
                onClick={this.openNotifications}
                className="nav--statusNotification"
              >
                <img src={NotificationIcon} alt="Notificações" />
                <div className="nav--statusNotificationStatus">2</div>
                <div className="nav--Notifications"></div>
              </div>
            ) : (
              <div
                onClick={this.openNotifications}
                className="nav--statusNotification"
              >
                <img src={NotificationIcon} alt="Notificações" />
                <div className="nav--statusNotificationStatus">2</div>
              </div>
            )}

            <div className="nav--profile">
              <div className="nav--profilePicture">
                <img src={ProfilePicture} alt="Perfil" />
                <div className="nav--profileStatus"></div>
              </div>
              {showProfile ? (
                <div className="nav--profileName--container">
                  <div className="nav--profileName">
                    <h2>Pedro Alencar</h2>
                    <img
                      onClick={this.openProfile}
                      src={OpenProfileIcon}
                      alt="Ver Perfil"
                    />
                  </div>

                  <div className="nav--profileOpen">
                    <div className="nav--profileOpen--message">
                      <h3>
                        Já está disponível o resultado da pesquisa de opinião
                        sobre o VLT Parangaba-Mucuripe.{" "}
                        <span>Consulte Agora</span>
                      </h3>
                    </div>
                    <div className="nav--profileOpen--message">
                      <h3>
                        Já está disponível o resultado da pesquisa de opinião
                        sobre o VLT Parangaba-Mucuripe.{" "}
                        <span>Consulte Agora</span>
                      </h3>
                    </div>
                    <div className="nav--profileOpen--btn">
                      <Link to="/messages">VER TODAS</Link>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="nav--profileName">
                  <h2>Pedro Alencar</h2>
                  <img
                    onClick={this.openProfile}
                    src={OpenProfileIcon}
                    alt="Ver Perfil"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Nav;
