import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/logo.svg";
import "./loginpage.styles.scss";

class LoginPage extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div className="loginPage">
        <div className="login--logoSection">
          <img src={Logo} alt="logo dataFortaleza" />
          <h1>Bem vindo!</h1>
          <span>Faça login para continuar</span>
        </div>

        <form className="login--form">
          <label for="cpf">CPF</label>
          <input name="cpf" type="text" id="cpf" placeholder="000.000.000-00" />
          <p>
            <span>Ooops!</span> Não encontramos seus dados em nossos registros.
            Caso ainda não tenha cadastro <span>Clique Aqui.</span>
          </p>
        </form>

        <div className="login--btn">
          <Link to="/home">
            <button>ENTRAR</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default LoginPage;
