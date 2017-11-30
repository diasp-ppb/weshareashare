import React, { Component } from 'react';
import { List, ListItem, Text, Radio } from 'native-base';

class RadioButtonsForm extends Component {
  constructor(props) {
    super(props);
  };

  state = {
    selected: null,
  }

  onPress = (key) => {
    this.setState({selected: key});
  }

  render() {
    return (
       <List>
       {
         this.props.answers.map(answer => {
           return (
             <ListItem onPress={() => this.onPress(answer.key)} key={answer.key}>
                 <Radio selected={this.state.selected == answer.key}/>
                 <Text>{answer.text}</Text>
             </ListItem>
           );
         })
       }
       </List>
    );
  };
};

export default RadioButtonsForm;
