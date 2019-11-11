import React from 'react';
import { UncontrolledCollapse, Button, Card } from 'reactstrap';

const Collapsable = () => {
  return (
    <React.Fragment>
      <Button
        color="default"
        id="toggler"
        style={{ padding: '0px', width: '178px', height: '30px' }}
      >
        <i
          className="fas fa-sort-down"
          style={{
            width: '178px',
            display: 'flex',
            justifyContent: 'center'
          }}
        ></i>
      </Button>
      <UncontrolledCollapse toggler="#toggler">
        <Card className="userStoreCard">
          <ul className="userStoreList list-group">
            <li className="list-group-item-success">
              Red Barn Stores 3858-CUAJIMALPA
            </li>
            <li className="list-group-item-secondary">
              Red Barn Stores 1770-PATIO SANTA FE
            </li>
            <li className="list-group-item-warning">KAYCHEE 154-Xochimilco</li>
          </ul>
        </Card>
      </UncontrolledCollapse>
    </React.Fragment>
  );
};

export default Collapsable;
