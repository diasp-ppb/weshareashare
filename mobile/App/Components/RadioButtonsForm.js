import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
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
         <List style={styles.radioForm}>
         {
           this.props.answers.map(answer => {
             return (
               <ListItem style={styles.radioItem} onPress={() => this.onPress(answer.key)} key={answer.key}>
                   <Radio selected={this.state.selected == answer.key}/>
                   <Text style={styles.radioText}>{answer.text}</Text>
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

var styles = StyleSheet.create({
  radioItem: {
    marginLeft: 30,
    marginRight: 10,
  },
  radioText: {
    paddingLeft: 10,
  },
  radioForm: {
    marginTop: 20,
  },
});
