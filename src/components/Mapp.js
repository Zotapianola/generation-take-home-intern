import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Map, TileLayer } from 'react-leaflet';
import Header from './Layout/Header';
import StoreMarkers from './Store/StoreMarkers';
import Menu from './Layout/Menu';
import 'leaflet/dist/leaflet.css';
import 'bootstrap/dist/css/bootstrap.css';

class Mapp extends Component {
  // establece estado inicial
  state = {
    location: {
      // coordenadas iniciales (CDMX)
      lat: 19.4326,
      lng: -99.1332
    },
    // zoom inicial
    zoom: 9,
    iconColor: ''
  };

  // obtiene color seleccionado por usuario en Menu
  getUserColor = userColor => this.setState({ iconColor: userColor });

  render() {
    const { zoom, location, iconColor } = this.state;
    // posición inicial de mapa
    const position = [location.lat, location.lng];

    return (
      <Router>
        <Route
          exact
          path="/"
          render={props => (
            <div className="mapGrandParent">
              <Header />
              <div className="mapParent">
                <Map className="map" center={position} zoom={zoom}>
                  <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <Menu getColor={this.getUserColor} />
                  <StoreMarkers iconColor={iconColor} />
                </Map>
              </div>
            </div>
          )}
        ></Route>
      </Router>
    );
  }
}

export default Mapp;
