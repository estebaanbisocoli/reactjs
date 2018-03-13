import React from 'react';
import { Header } from 'semantic-ui-react'
const Error404 = ({ match }) => {
  return (
    <div>
      <Header as='h2' textAlign='center'>Error 404</Header>
      <Header as='h3' textAlign='center'>La pagina  no fue encontrada</Header>
    </div>
  );
};

export default Error404;