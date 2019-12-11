import React, { Component } from "react";
import Card from "../../components/Card/card.component";
import OpinionModal from "../../components/OpinionModal/opinionModal.component";
import Ponte from "../../assets/img/ponteMetalica.jpeg";
import MapaVlt from "../../assets/img/mapaVlt.png";
import Biometria from "../../assets/img/biometria.png";
import Cidade from "../../assets/img/cidade.png";
import "./opinionpage.styles.scss";

class OpinionPage extends Component {
  constructor() {
    super();

    this.state = {
      show: false
    };
  }

  //   showModal = e => {
  //     e.preventDefault();
  //     this.setState({ show: !this.state.show });
  //   };

  render() {
    // const { show } = this.state;
    return (
      <div className="opinionPage">
        <div className="opinionPage-body--container">
          {/*{show ? (
            <div style={{ position: "absolute", top: "30%", left: "35%" }}>
              <OpinionModal show={show} close={this.showModal} />
            </div>
          ) : null}*/}
          <Card
            id="1"
            image={Ponte}
            chamada=""
            title="Privatização de Espaços na Orla de Fortaleza"
            text=""
            description="opine sobre a privatização de espaços na orla de fortaleza"
            destination="opine/privatizacao"
            btnText="OPINAR"
            classCard="card--withImage"
          />

          <Card
            id="2"
            image={Ponte}
            chamada=""
            title="Engorda da Orla da Beira Mar "
            text=""
            description="opine sobre a engorda da orla da beira mar"
            destination="opine/engorda-da-orla"
            btnText="OPINAR"
            classCard="card--withImage"
          />

          <Card
            id="3"
            image={Ponte}
            chamada=""
            title="Obras do Aquário de Fortaleza"
            text=""
            description="opine sobre as obras do aquario de fortaleza"
            destination="opine/obras-aquario"
            btnText="OPINAR"
            classCard="card--withImage"
          />

          <Card
            id="4"
            image=""
            chamada=""
            title="Pergunte"
            text="Quer saber a opinião da população sobre um determinado tema ou acontecimento? Crie uma pesquisa de opinião!"
            description="Pergunte"
            destination=""
            btnText="PERGUNTAR"
            classCard="card--noImage"
            onClick={this.showModal}
          />
        </div>
      </div>
    );
  }
}

export default OpinionPage;
