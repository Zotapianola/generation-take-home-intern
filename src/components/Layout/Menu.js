import React, { Fragment, Component } from "react";
import PropTypes from "prop-types";
import {
  Card,
  Button,
  ButtonToolbar,
  ButtonGroup,
  CardTitle,
  CardText
} from "reactstrap";
import Collapsable from "../Layout/Collapse";

// ícono para botones de tienda
let storeIcon = <i className="fas fa-store"></i>;

class Menu extends Component {
  // al cliquear tienda, obtiene color de pins que usará usuario
  handleClick = e => this.props.getColor(e.currentTarget.id);

  render() {
    return (
      <Fragment>
        <Card body className="float-right menuCard">
          <CardTitle style={{ padding: "10px", margin: "0px" }}>
            <h2 style={{ margin: "0px" }}>¡Bienvenide!</h2>
          </CardTitle>
          <CardText style={{ padding: "10px", margin: "0px" }}>
            Marca tus tiendas favoritas con un color de tu preferencia.
          </CardText>
          <ButtonToolbar
            aria-label="Toolbar with button groups"
            style={{
              display: "flex",
              justifyContent: "center"
            }}
          >
            <ButtonGroup aria-label="First group">
              <Button
                className="storeBtn"
                id="red"
                onClick={this.handleClick}
                color="danger"
              >
                {storeIcon}
              </Button>
              <Button
                className="storeBtn"
                id="green"
                onClick={this.handleClick}
                color="success"
              >
                {storeIcon}
              </Button>
              <Button
                className="storeBtn"
                id="yellow"
                onClick={this.handleClick}
                color="warning"
              >
                {storeIcon}
              </Button>
              <Button
                className="storeBtn"
                id="grey"
                onClick={this.handleClick}
                color="secondary"
              >
                {storeIcon}
              </Button>
            </ButtonGroup>
            <Collapsable />
          </ButtonToolbar>
        </Card>
      </Fragment>
    );
  }
}

Menu.propTypes = {
  getColor: PropTypes.func.isRequired
};

export default Menu;
