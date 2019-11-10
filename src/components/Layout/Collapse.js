import React from 'react';
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';

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
        <Card>
          <CardBody>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            magni, voluptas debitis similique porro a molestias consequuntur
            earum odio officiis natus, amet hic, iste sed dignissimos esse fuga!
            Minus, alias.
          </CardBody>
        </Card>
      </UncontrolledCollapse>
    </React.Fragment>
  );
};

export default Collapsable;
