import React, { Component } from "react";
import Nav from "../../components/Nav/nav.component";
import NavigationSchema from "../../components/NavigationSchema/navigationschema.component";
import MapComponent from "../../components/Map/map.component";
import BairrosFortaleza from "../../data/bairrosFortaleza.json";
import RendaMedia from "../../data/rendaMedia.json";
import Ibge from "../../data/censoIBGE2010.json";
import "./mappage.styles.scss";

class MapPage extends Component {
  constructor() {
    super();

    this.state = {
      bairrosFortaleza: BairrosFortaleza,
      rendaMedia: RendaMedia,
      ibge: Ibge
    };
  }

  render() {
    return (
      <React.Fragment>
        <Nav />
        <NavigationSchema />
        <div className="mapPage">
          <div className="mapPage-body--container">
            <div className="mapPage-map--container">
              <MapComponent {...this.state} />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default MapPage;
