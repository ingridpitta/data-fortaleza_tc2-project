import React, { Component } from "react";
import { Map, Marker, Popup, TileLayer, GeoJSON } from "react-leaflet";
import BairrosFortaleza from "../../data/bairrosFortaleza.json";
import RendaMedia from "../../data/rendaMedia.json";
import "./map.styles.scss";

class MapComponent extends Component {
  constructor({state}) {
    super(state);

    this.state = {
      lat: -3.770398,
      lng: -38.524604,
      zoom: 11,
      data: null
    };
  }

  render() {
    const position = [this.state.lat, this.state.lng];
    const { data } = this.state;
    console.log("mapa", BairrosFortaleza.features.geometry);
    return (
      <div className="mapid">
        <Map center={position} zoom={this.state.zoom} scrollWheelZoom={false}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <GeoJSON
            data={BairrosFortaleza.features}
            id="bairros"
            style={() => ({
              color: "white",
              weight: 1,
              fillColor: "none",
              fillOpacity: 1,
              className: "bairros"
            })}
          />
          <GeoJSON
            data={RendaMedia.features}
            id="renda"
            style={() => ({
              color: "white",
              weight: 1,
              fillColor: "#FF0058",
              fillOpacity: 0.5,
              className: "renda"
            })}
          />
          <Marker position={position}>
            <Popup>Fortaleza, CE</Popup>
          </Marker>
        </Map>
      </div>
    );
  }
}

export default MapComponent;
