import React, { Component } from "react";
import Card from "../../components/Card/card.component";
import Nav from "../../components/Nav/nav.component";
import NavigationSchema from "../../components/NavigationSchema/navigationschema.component";
// import OpinionModal from "../../components/ComplaintModal/complaintModal.component";
import Ponte from "../../assets/img/ponteMetalica.jpeg";
import Orla from "../../assets/img/orla.png";
import Aquario from "../../assets/img/aquario.png";
import "./opinionPage.styles.scss";

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
      <React.Fragment>
      <Nav/>
      <NavigationSchema/>
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
              image={Orla}
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
              image={Aquario}
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
      </React.Fragment>
    );
  }
}

export default OpinionPage;
