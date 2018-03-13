import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Home from './Home'
import AboutUs from './AboutUs'
import Contact from './Contact'
import Error404 from './Error404'
import { Container } from 'semantic-ui-react'
const Contenido = () => {
  return (
    <Container>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={AboutUs} />
        <Route path='/contact' component={Contact} />
        <Route component={Error404} />
      </Switch>
    </Container>
  );
};

export default Contenido;