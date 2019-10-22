import React, { Fragment, Component } from 'react';
import { Card, Button, ButtonToolbar, ButtonGroup, CardTitle, CardText } from 'reactstrap';

class Menu extends Component {
    state = {
        color: null
    }

    handleClick = (e) => {
        return this.setState(e.target.id)
    }

    render () {
        return (
            <Fragment>
                <Card body className="menuCard">
                    <CardTitle>Saludos, estudiante</CardTitle>
                    <CardText>Marca tus tiendas favoritas con un color de tu preferencia.</CardText>
                        <ButtonToolbar aria-label="Toolbar with button groups">
                            <ButtonGroup className="mr-2" aria-label="First group">
                                <Button id="red" menu={this.state} onClick={this.handleClick} color="danger">*</Button>
                                <Button id="green" menu={this.state} onClick={this.handleClick} color="success">*</Button>
                                <Button id="yellow" menu={this.state} onClick={this.handleClick} color="warning">*</Button>
                                <Button id="grey" menu={this.state} onClick={this.handleClick} color="secondary">*</Button>
                            </ButtonGroup>
                        </ButtonToolbar>
                </Card>
            </Fragment>
        )
    }
}

export default Menu;