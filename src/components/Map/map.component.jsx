import React, { Component } from "react";
import Charts from "../../components/Charts/charts.component";
import BairrosFortaleza from "../../data/bairrosFortaleza.json";
import RendaMedia from "../../data/rendaMedia.json";
import L from "leaflet";
import { Map, Marker, Popup, TileLayer, GeoJSON } from "react-leaflet";
import "./map.styles.scss";

class MapComponent extends Component {
  constructor({ props }) {
    super(props);

    this.state = {
      lat: -3.770398,
      lng: -38.524604,
      zoom: 11
    };
  }

  highlightFeature = e => {
    let layer = e.target;
    const style = {
      stroke: true,
      color: "white",
      weight: 1.5,
      fillColor: "#FF0058",
      fillOpacity: 0.8,
      dashArray: ""
    };
    layer.setStyle(style);

    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
      layer.bringToFront();
    }
  };

  resetHighlight = e => {
    let layer = e.target;
    const style = {
      stroke: true,
      color: "white",
      weight: 1,
      fillColor: "#FF0058",
      fillOpacity: 0.3,
      dashArray: "3"
    };
    layer.setStyle(style);
  };

  infos = e => {
    console.log(e.target.feature.properties.UI_NOME);
  };

  onEachFeature = (feature, layer) => {
    layer.on({
      mouseover: this.highlightFeature,
      mouseout: this.resetHighlight,
      click: this.infos
    });
  };

  render() {
    const { bairrosFortaleza, rendaMedia } = this.props;
    const position = [this.state.lat, this.state.lng];
    return (
      <React.Fragment>
        <div className="mapid" style={{display: "flex", width: "50%", marginLeft: "0"}}>
          <Map
            center={position}
            zoom={this.state.zoom}
            scrollWheelZoom={false}
            editing={true}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <GeoJSON
              data={bairrosFortaleza.features}
              id="bairros"
              style={() => ({
                ref: "geojson",
                stroke: true,
                color: "white",
                weight: 1,
                fillColor: "#FF0058",
                fillOpacity: 0.3,
                dashArray: "3",
                className: "bairros"
              })}
              onEachFeature={this.onEachFeature.bind(this)}
            />
            <GeoJSON
              data={rendaMedia.features}
              id="renda"
              style={() => ({
                ref: "geojson",
                stroke: true,
                color: "transparent",
                weight: 1,
                fillColor: "none",
                fillOpacity: 0.2,
                className: "renda"
              })}
            />
          </Map>
        </div>
        <div className="map--charts">
          <Charts {...this.props} />
        </div>
      </React.Fragment>
    );
  }
}

export default MapComponent;
