import React from 'react';
import MapComponent from '../../components/Map/map.component';
import './mappage.styles.scss';

const MapPage = () => (
    <div className="mapPage">
        <div className="mapPage-body--container">
            <div className="mapPage-map--container">
                <MapComponent/>
            </div>
            <div className="mapPage-data--container"></div>
        </div>
        <div className="mapPage-footer--container"></div>
    </div>
)

export default MapPage;