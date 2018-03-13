import React from 'react';
import { Form, Header } from 'semantic-ui-react'
const Contact = () => {
  return (
    <div>
      <Header as='h2'>
        Contactanos!
      </Header>
      <Form>
        <Form.Field>
          <label>Nombre Completo</label>
          <Form.Input placeholder='Nombre y Apellido' />
        </Form.Field>
        <Form.Field>
          <label>Email de contacto</label>
          <Form.Input type='email' placeholder='email' />
        </Form.Field>
        <Form.Field>
          <Form.TextArea label='Mensaje' placeholder='Tu Mensaje' />
        </Form.Field>
        <Form.Button>Enviar</Form.Button>
      </Form>
    </div>
  );
};

export default Contact;