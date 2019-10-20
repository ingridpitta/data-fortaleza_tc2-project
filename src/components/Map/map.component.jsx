import React, {Component} from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import firebase from 'firebase/app';
import './map.styles.scss';


class MapComponent extends Component {
    constructor(props){
        super(props);

        this.state={
            lat:-3.770398,
            lng: -38.524604,
            zoom: 11,
            geoJsonData:[],
        }
    }

    componentDidMount = async () => {
        const getDataFromFirebase = async () => {
            const geoData =  
                await firebase.database().ref('data-fortaleza-tc2-project/data').on('value', (snapshot) =>{
                    return snapshot.val()
                })
            await this.setState({geoJsonData: geoData})
        }
    }
    // componentDidMount =  async (getData) => {
    //     const data =  () =>  getData();
    //     this.setState({geoJson: data})
    //     console.log("state", this.state)
        // .then((result, error) => {
        //     if (result){
        //         this.setState({geoJson:result})
        //         console.log("data",result)
        //         console.log("state", this.state)
        //     } else {
        //         console.log("erro",error)
        //     }
        // })
    // }

    

    render(){
        const position = [this.state.lat, this.state.lng];
        console.log("state", this.state);
        return (
            <div className="mapid">
                <Map center={position} zoom={this.state.zoom} scrollWheelZoom={false}>
                    <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                    />
                    <Marker position={position}>
                    <Popup>Fortaleza, CE</Popup>
                    </Marker>
                </Map>
            </div>
        )
    }
}

export default MapComponent;