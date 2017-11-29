import React, { Component } from 'react';
import { List, ListItem, Text, Radio } from 'native-base';

class RadioButtonsForm extends Component {
  constructor(props) {
    super(props);
  };

  answersArr = this.props.answers.map(answer => {
    return (
      <ListItem>
          <Radio selected={false}/>
          <Text>{answer}</Text>
      </ListItem>
    );
  });

  render() {
    return (
       <List>
       { this.answersArr }
       </List>
    );
  };
};

export default RadioButtonsForm;
