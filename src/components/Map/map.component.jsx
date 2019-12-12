import React, {Component} from "react";
import Charts from "../../components/Charts/charts.component";
import L from "leaflet";
import {Map, Marker, Popup, TileLayer, GeoJSON} from "react-leaflet";
import "./map.styles.scss";

class MapComponent extends Component {
    constructor({props}) {
        super(props);

        this.state = {
            lat: -3.770398,
            lng: -38.524604,
            zoom: 11,
            layerInfo: null
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
        console.log("dadosInfos", e.target);
        this.setState({
            layerInfo: {
                cod: e.target.feature.properties.UI_COD,
                name: e.target.feature.properties.UI_NOME,
                area: e.target.feature.properties.AREA_KM2,
                ser: e.target.feature.properties.SER,
                distrito: e.target.feature.properties.DISTRITO
            }
        });
    };

    onEachFeature = (feature, layer) => {
        layer.on({
            mouseover: this.highlightFeature,
            mouseout: this.resetHighlight,
            click: this.infos
        });
    };

    render() {
        const {bairrosFortaleza, rendaMedia, ibge} = this.props;
        const position = [this.state.lat, this.state.lng];
        return (
            <React.Fragment>
                <div
                    className="mapid"
                    style={{display: "flex", width: "50%", marginLeft: "0"}}>
                    <Map
                        center={position}
                        zoom={this.state.zoom}
                        scrollWheelZoom={false}
                        editing={true}>
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
                    </Map>
                </div>
                <div className="map--charts">
                    <Charts {...this.props} layerInfo={this.state.layerInfo}/>
                </div>
            </React.Fragment>
        );
    }
}

export default MapComponent;
