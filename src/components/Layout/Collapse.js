import React from 'react';
import { UncontrolledCollapse, Button, Card } from 'reactstrap';

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th></th>
      </tr>
    </thead>
  );
};

const TableBody = () => {
  return (
    <tbody>
      <tr>
        <td>1</td>
        <td style={{ backgroundColor: '#C82232', color: 'white' }}>
          Tienda importante
        </td>
        <td>X</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Tienda cercana al cole</td>
        <td>X</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Artículos específicos</td>
        <td>X</td>
      </tr>
      <tr>
        <td>4</td>
        <td>Tienda importante</td>
        <td>X</td>
      </tr>
    </tbody>
  );
};

const Collapsable = () => {
  return (
    <React.Fragment>
      <Button color="default" id="toggler">
        <i className="fas fa-sort-down" id="collapse-icon"></i>
      </Button>
      <UncontrolledCollapse toggler="#toggler">
        <Card className="userStoreCard">
          <table>
            <TableHeader />
            <TableBody />
          </table>
        </Card>
      </UncontrolledCollapse>
    </React.Fragment>
  );
};

export default Collapsable;
