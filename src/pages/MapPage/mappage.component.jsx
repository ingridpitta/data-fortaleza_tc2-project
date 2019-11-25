import React, {Component} from 'react';
import MapComponent from '../../components/Map/map.component';
import Charts from '../../components/Charts/charts.component';
import './mappage.styles.scss';


class MapPage extends Component {
    constructor (){
        super();

        this.state={

        }
    }

    render(){
        return(
            <div className="mapPage">
                <div className="mapPage-body--container">
                    <div className="mapPage-map--container">
                        <MapComponent {...this.state}/>
                    </div>
                    <div className="mapPage-data--container">
                        <Charts {...this.state}/>
                    </div>
                </div>
                <div className="mapPage-footer--container"></div>
            </div>
        )
    }

}

export default MapPage;