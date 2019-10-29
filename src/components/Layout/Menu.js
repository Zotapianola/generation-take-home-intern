import React, { Fragment, Component } from 'react';
import { Card, Button, ButtonToolbar, ButtonGroup, CardTitle, CardText } from 'reactstrap';

// ícono para botones de tienda
let storeIcon = <i className="fas fa-store"></i>;

class Menu extends Component {
    state = {
        color: ''
    }

    handleClick = (e) => {
        this.setState({color: e.target.id})
    }

    render () {
        // const { color } = this.state;
        return (
            <Fragment>
                <Card body className="float-right menuCard">
                    <CardTitle><h2>¡Bienvenide!</h2></CardTitle>
                    <CardText>Marca tus tiendas favoritas con un color de tu preferencia.</CardText>
                        <ButtonToolbar aria-label="Toolbar with button groups">
                            <ButtonGroup className="mr-2" aria-label="First group">
                                <Button 
                                id="red" 
                                onClick={this.handleClick} 
                                color="danger">{storeIcon}</Button>
                                <Button id="green" 
                                onClick={this.handleClick} 
                                color="success">{storeIcon}</Button>
                                <Button id="yellow" 
                                onClick={this.handleClick} 
                                color="warning">{storeIcon}</Button>
                                <Button id="grey" 
                                onClick={this.handleClick} 
                                color="secondary">{storeIcon}</Button>
                            </ButtonGroup>
                        </ButtonToolbar>
                </Card>
            </Fragment>
        )
    }
}

export default Menu;