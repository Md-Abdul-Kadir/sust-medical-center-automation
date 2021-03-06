import React, { Component } from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';



export class MapContainer extends Component {
    state = {
      showingInfoWindow: false,
      activeMarker: {},
        selectedPlace: {},
        mapCenter: {
            lat:24.9230228,
            lng:91.8332936
        }
    };
   
    onMarkerClick = (props, marker, e) =>
      this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
      });
   
    onMapClicked = (props) => {
      if (this.state.showingInfoWindow) {
        this.setState({
          showingInfoWindow: false,
          activeMarker: null
        })
      }
    };
   
    render() {
      return (
        <Map google={this.props.google}
              initialCenter={{
                  lat:this.state.mapCenter.lat,
                  lng:this.state.mapCenter.lng
              }}  
              center={{
                lat:this.state.mapCenter.lat,
                lng:this.state.mapCenter.lng

              }}
          >
              <Marker
                  position={{
                    lat: this.state.mapCenter.lat,
                    lng:this.state.mapCenter.lng
                   
               }}
              />
   
          {/* <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}>
              <div>
                <h1>{this.state.selectedPlace.name}</h1>
              </div>
          </InfoWindow> */}
        </Map>
      )
    }
}
  
export default GoogleApiWrapper({
    apiKey: ('AIzaSyDdawmr1OdnHy7egUhGrx64X2ccs50sPKM')
  })(MapContainer)