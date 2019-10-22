import React, { Fragment, Component } from 'react';
import { Card, Button, ButtonToolbar, ButtonGroup, CardTitle, CardText } from 'reactstrap';

// ícono para botones de tienda
let storeIcon = <i className="fas fa-store"></i>;

class Menu extends Component {
    state = {
        color: ''
    }

    handleClick = (e) => {
        return this.setState(e.target.id)
    }

    render () {
        const { color } = this.state.color;
        return (
            <Fragment>
                <Card body className="menuCard">
                    <CardTitle>Saludos, estudiante</CardTitle>
                    <CardText>Marca tus tiendas favoritas con un color de tu preferencia.</CardText>
                        <ButtonToolbar aria-label="Toolbar with button groups">
                            <ButtonGroup className="mr-2" aria-label="First group">
                                <Button 
                                id="red" 
                                userIcon={color} 
                                onClick={this.handleClick} 
                                color="danger">{storeIcon}</Button>
                                <Button id="green" 
                                userIcon={color} 
                                onClick={this.handleClick} 
                                color="success">{storeIcon}</Button>
                                <Button id="yellow" 
                                userIcon={color} 
                                onClick={this.handleClick} 
                                color="warning">{storeIcon}</Button>
                                <Button id="grey" 
                                userIcon={color} 
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