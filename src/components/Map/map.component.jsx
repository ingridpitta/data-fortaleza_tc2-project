import React, { Component } from "react";
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

  render() {
    const { bairrosFortaleza, rendaMedia } = this.props;
    const position = [this.state.lat, this.state.lng];
    return (
      <div className="mapid">
        <Map center={position} zoom={this.state.zoom} scrollWheelZoom={false}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <GeoJSON
            data={bairrosFortaleza.features}
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
            data={rendaMedia.features}
            id="renda"
            style={() => ({
              color: "white",
              weight: 1,
              fillColor: "#FF0058",
              fillOpacity: 0.5,
              className: "renda"
            })}
          />
          {/*<Marker position={position}>
            <Popup>Fortaleza, CE</Popup>
          </Marker>*/}
        </Map>
      </div>
    );
  }
}

export default MapComponent;
