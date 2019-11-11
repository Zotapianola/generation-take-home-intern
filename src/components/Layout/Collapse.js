import React from 'react';
import { UncontrolledCollapse, Button, Card } from 'reactstrap';

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
      </tr>
    </thead>
  );
};

const TableBody = () => {
  return (
    <tbody>
      <tr>
        <td>1</td>
        <td>My Store 1</td>
        <td>X</td>
      </tr>
      <tr>
        <td>2</td>
        <td>My Store 2</td>
        <td>X</td>
      </tr>
      <tr>
        <td>3</td>
        <td>My Store 3</td>
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
