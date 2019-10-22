import React, { Component, Fragment } from 'react';
import uuid from 'uuid';
import directory from './store_directory.json';
import { Marker, Popup } from 'react-leaflet';
// import UserStores from './UserStores';
import UserIcons from '../User/UserIcons';

// marcadores de tienda de usuario
let userIcon = UserIcons();

class StoreMarkers extends Component {
  state = {
    userStores: []
  }

  addUserStore = (e) => {
    // guarda posición de marcador cliqueado
    let markerPosition = e.target.options.position;
    // agrega posición cliqueada a array de posiciones
    this.setState({ userStores: [...this.state.userStores, markerPosition]});
    console.log(this.state);
    // si cualquier elemento del array resultante está contenido en el original, cambia ícono
    // renderear lista de usuarios en UserStores en un card (instalé bootstrap y reacstrap)
  }

  render () {
    return (
      <Fragment>
        {directory.map((newMarker) => (
          <Marker
            key={`mark${uuid.v4()}`}
            position={[newMarker.Coordinates.lat, newMarker.Coordinates.lng]}
            onClick={this.addUserStore}
            icon={userIcon}>
            <Popup>
              <b>
                {newMarker.Name}
              </b>
            </Popup>
          </Marker>))}
      </Fragment>
    )
  }
}

export default StoreMarkers;