import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import { Card, Button, ButtonToolbar, ButtonGroup, CardTitle, CardText } from 'reactstrap';


// ícono para botones de tienda
let storeIcon = <i className="fas fa-store"></i>;

class Menu extends Component {

    handleClick = e => this.props.getColor(e.currentTarget.id);

    render () {
        return (
            <Fragment>
                <Card body className="float-right menuCard">
                    <CardTitle><h2>¡Bienvenide!</h2></CardTitle>
                    <CardText>Marca tus tiendas favoritas con un color de tu preferencia.</CardText>
                        <ButtonToolbar aria-label="Toolbar with button groups">
                            <ButtonGroup className="mr-2" aria-label="First group">
                                <Button className="storeBtn"
                                id="red" 
                                onClick={this.handleClick} 
                                color="danger">{storeIcon}
                                </Button>
                                <Button className="storeBtn" id="green" 
                                onClick={this.handleClick} 
                                color="success">{storeIcon}</Button>
                                <Button className="storeBtn" id="yellow" 
                                onClick={this.handleClick} 
                                color="warning">{storeIcon}</Button>
                                <Button className="storeBtn" id="grey" 
                                onClick={this.handleClick} 
                                color="secondary">{storeIcon}</Button>
                            </ButtonGroup>
                        </ButtonToolbar>
                </Card>
            </Fragment>
        )
    }
}

Menu.PropTypes = {
    getColor: PropTypes.func.isRequired
}

export default Menu;