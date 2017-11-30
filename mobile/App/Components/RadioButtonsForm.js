import React, { Component } from 'react';
import { StyleSheet} from 'react-native';
import { List, ListItem, Text, Radio, StyleProvider } from 'native-base';
import getTheme from '../../native-base-theme/components';
import material from '../../native-base-theme/variables/material';

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
       <StyleProvider style={getTheme(material)}>
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
      </StyleProvider>
    );
  };
};

export default RadioButtonsForm;
