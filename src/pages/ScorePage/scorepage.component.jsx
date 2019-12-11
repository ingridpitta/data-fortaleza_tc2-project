import React from "react";
import Nav from "../../components/Nav/nav.component";
import NavigationSchema from "../../components/NavigationSchema/navigationschema.component";
import { Link } from "react-router-dom";
import "./scorepage.styles.scss";

const ScorePage = () => (
  <React.Fragment>
    <Nav />
    <NavigationSchema />
    <div className="scorePage">
      <div className="scorePage--intro">
        <div className="scorePage--title">
          <h1>Troque seus Pontos</h1>
          <h3>
            Escolha por quais produtos, descontos ou serviços deseja trocar seus
            pontos.
          </h3>
        </div>
        <span>SALDO: 1.020 pontos</span>
      </div>
      <div className="scorePage--main">
        <div className="scorePage--main-indice">
          <ul>
            <li>Escolha uma Categoria</li>
            <li>Todos</li>
            <li id="scorePage--selected-listItem">Descontos</li>
            <li>Serviços</li>
            <li>Útilitários</li>
            <li>Passeios</li>
            <li>Vales Compra</li>
          </ul>
        </div>
        <div className="scorePage--main-content">
          <ul className="scorePage--list">
            <li>Ofertas</li>
          </ul>
          <div className="scorePage--content-card-container ">
            <div className="scorePage--content-card">
              <div>
                <h1>ENEL</h1>
                <h2>800 pontos</h2>
              </div>

              <p>5% de desconto na próxima fatura.</p>
              <div className="scorePage--btnCard">
                <Link to="/trocar/enel">
                  <button>TROCAR</button>
                </Link>
              </div>
            </div>
            <div className="scorePage--content-card">
              <div>
                <h1>CAGECE</h1>
                <h2>600 pontos</h2>
              </div>

              <p>5% de desconto na próxima fatura.</p>
              <div className="scorePage--btnCard">
                <Link to="/trocar/cagece">
                  <button>TROCAR</button>
                </Link>
              </div>
            </div>
            <div className="scorePage--content-card">
              <div>
                <h1>UCI</h1>
                <h2>1500 pontos</h2>
              </div>

              <p>Meia entrada em qualquer cinema da rede UCI.</p>
              <div className="scorePage--btnCard">
                <Link to="/trocar/uci">
                  <button>TROCAR</button>
                </Link>
              </div>
            </div>
            <div className="scorePage--content-card">
              <div>
                <h1>CAR +</h1>
                <h2>2000 pontos</h2>
              </div>

              <p>15% de desconto na lavagem do seu carro ou moto.</p>
              <div className="scorePage--btnCard">
                <Link to="/trocar/car">
                  <button>TROCAR</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </React.Fragment>
);

export default ScorePage;
