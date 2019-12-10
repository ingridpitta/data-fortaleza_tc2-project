import React, { Component } from "react";
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
    layer.setStyle({
      style: {
        weight: 10,
        stroke: true,
        fill: true,
        fillColor: "#000",
        color: "#000",
        fillOpacity: 1,
        opacity: 1,
        dashArray: ""
      }
    });

    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
      layer.bringToFront();
    }
  };

  resetHighlight = e => {
    let geojson = L.geoJson(this.props.bairrosFortaleza);
    geojson.resetStyle(e.target);
  };

  zoomToFeature = e => {
    L.map.fitBounds(e.target.getBounds());
  };

  onEachFeature = (feature, layer) => {
    layer.on({
      mouseover: this.highlightFeature,
      mouseout: this.resetHighlight
      // click: this.zoomToFeature
    });
  };

  render() {
    const { bairrosFortaleza, rendaMedia } = this.props;
    const position = [this.state.lat, this.state.lng];
    return (
      <div className="mapid">
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
          {/*<Marker position={position}>
            <Popup>Fortaleza, CE</Popup>
          </Marker>*/}
        </Map>
      </div>
    );
  }
}

export default MapComponent;
