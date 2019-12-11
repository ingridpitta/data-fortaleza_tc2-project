import React from "react";
import Nav from "../../components/Nav/nav.component";
import NavigationSchema from "../../components/NavigationSchema/navigationschema.component";
import Graphic from "../../assets/img/graphic.svg";
import Card from "../../components/Card/card.component";
import MapImage from "../../assets/img/mapImage.svg";
import Aquario from "../../assets/img/aquario.png";
import "./resultspage.styles.scss";

const ResultsPage = () => (
  <React.Fragment>
    <Nav />
    <NavigationSchema />
    <div className="resultsPage">
      <div className="resultsPage--content">
        <div className="resultsPage--card">
          <div className="imageCard">
            <img src={Aquario} alt="Imagem do Aquário" />
          </div>
          <h1>
            <span>Resultado</span> Obras do Aquário
          </h1>
          <p>
            Você acha que poderia ter um projeto alternativo, melhor do que o
            proposto?
          </p>
          <div className="imageCard--graphic">
            <img src={Graphic} alt="gráfico dos resultados" />
          </div>
        </div>
        <img src={MapImage} alt="mapa do resultado espacializado" />
      </div>
    </div>
  </React.Fragment>
);

export default ResultsPage;
