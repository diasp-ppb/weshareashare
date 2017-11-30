import React, { Component } from 'react';
import { List, ListItem, Text, Radio } from 'native-base';

class RadioButtonsForm extends Component {
    constructor(props) {
        super(props);
    };

    answersArr = this.props.answers.map(answer => {
        return (
            <ListItem onPress={() => this.props.saveOption(answer.key)}  key={answer.key}>
                <Radio selected={false}/>
                <Text>{answer.text}</Text>
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
