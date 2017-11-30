import React, { Component } from 'react';
import { Form, Item, Input, Text } from 'native-base';

class PersonalDataForm extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <Form>
        <Item>
          <Input placeholder="Nome Completo"/>
        </Item>
        <Item>
          <Input placeholder="dd"/>
          <Text>/</Text>
          <Input placeholder="mm"/>
          <Text>/</Text>
          <Input placeholder="aaaa"/>
        </Item>
        <Item>
          <Input placeholder="Morada"/>
        </Item>
        <Item>
          <Input placeholder="Código Postal"/>
        </Item>
        <Item>
          <Input placeholder="Localidade"/>
        </Item>
        <Item>
          <Input placeholder="Número do Cartão de Cidadão"/>
        </Item>
        <Item>
          <Input placeholder="NIF"/>
        </Item>
        <Item>
          <Input placeholder="Profissão"/>
        </Item>
        <Item last>
          <Input placeholder="Nacionalidade"/>
        </Item>
      </Form>
    );
  };
};

export default PersonalDataForm;
