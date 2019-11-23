import React from 'react';
import MapComponent from '../../components/Map/map.component';
import Nav from '../../components/Nav/nav.component';
import './homepage.styles.scss';

const HomePage = () => (
    <div className="homepage">
        <Nav/>
        <div className="homepage-body--container">
            <div className="homepage-map--container">
                <MapComponent/>
            </div>
            <div className="homepage-data--container"></div>
        </div>
        <div className="homepage-footer--container"></div>
    </div>
)

export default HomePage;