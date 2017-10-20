import React from 'react';

import {
  Platform,
  StyleSheet,
  Text,
  Button,
  View,
  Picker
} from 'react-native';

import {GiftedChat, Actions, Bubble} from 'react-native-gifted-chat';
import CustomActions from './CustomActions';
import CustomView from './CustomView';
import * as Progress from 'react-native-progress';

const STATES = require("./data/fatcaStates.js");

export default class FatcaFormQuiz extends React.Component {

  constructor(props) {
    super(props);

    this.formHeader = 0;
    this.progress = 0;
    this.progressStep = 1/STATES.questions.length;


    this.state = {
      messages: [],
      loadEarlier: false,
      typingText: null,
      isLoadingEarlier: false,
    };

    this.messages  = {}

    this._isMounted = false;
    this.onSend = this.onSend.bind(this);
    this.onReceive = this.onReceive.bind(this);
    this.renderCustomActions = this.renderCustomActions.bind(this);
    this.renderBubble = this.renderBubble.bind(this);
    this.renderFooter = this.renderFooter.bind(this);
    this.onLoadEarlier = this.onLoadEarlier.bind(this);

    this.question = 0;

    this.formData = {
      name: null,
      NIF: null,
      isUSPerson: null,
      locale: 'Porto',
      day: null,
      month: null,
      year: null
    };
  }

  componentWillMount() {
    this._isMounted = true;
    this.setState(() => {
      return {
        messages: [],
      };
    });

    this.onReceive(STATES.questions[this.question]);
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  onLoadEarlier() {
    this.setState((previousState) => {
      return {
        isLoadingEarlier: true,
      };
    });

    setTimeout(() => {
      if (this._isMounted === true) {
        this.setState((previousState) => {
          return {
            //messages: GiftedChat.prepend(previousState.messages, require('./data/old_messages.js')),
            loadEarlier: false,
            isLoadingEarlier: false,
          };
        });
      }
    }, 1000); // simulating network
  }

  onSend(messages = []) {
    this.setState((previousState) => {
      return {
        messages: GiftedChat.append(previousState.messages, messages),
      };
    });

    // for demo purpose
    this.answerForm(messages);
  }


  answerForm(messages) {
    if (messages.length > 0) {
      if (this.question) {
        this.setState((previousState) => {
          return {
            typingText: 'React Native is typing'
          };
        });
      }
    }

    setTimeout(() => {
      if (this._isMounted === true) {
        if (messages.length > 0) {
          /*if (messages[0].image) {
          this.onReceive('Nice picture!');
        } else if (messages[0].location) {
        this.onReceive('My favorite place');
      } else {
      if (!this._isAlright) {
      this._isAlright = true;
      this.onReceive('Alright');
    }
  }*/
  switch (this.question) {
    case 0:
    this.validateName(messages[0]);
    break;
    case 1:
    this.validateNIF(messages[0]);
    break;
    default:
    this.validateBoolean(messages[0]);
  }

}
}
}, 1000);
}

validateName(message){
  if(message.text != null && /^[A-Za-záãẽêéíóôõúç\s]+$/.test(message.text)){
    //Save data
    this.formData.name = message.text;

    //Ask next question
    this.question++;
    this.onReceive(STATES.questions[this.question]);
    this.progress += this.progressStep;
  }
  else{
    this.onReceive('Name not valid. Please try again');
  }
}

validateNIF(message){
  fetch('http://www.nif.pt/?json=1&q=' + message.text + '&key=key')
  .then((response) => response.json())
  .then((responseJson) => {
    if(responseJson.is_nif /*&& responseJson.nif_validation*/){
      //Save data
      this.formData.NIF = parseInt(message.text);

      //Ask next question
      this.question++;
      this.onReceive(STATES.questions[this.question]);
      this.progress += this.progressStep;
      this.onCreatePicker(STATES.answers);
    }
    else{
      this.onReceive('NIF not valid. Please try again');
    }

    return responseJson.is_nif;
  })
  .catch((error) => {
    console.error(error);
    return false;
  });
}

validateBoolean(message){
  //TODO: See how to make response not be text
  if((/(yes|no)$/i).test(message.text)){
    var ans = (/(yes)$/i).test(message.text);
    //Save data
    if(ans && this.question < 8){
      this.formData.isUSPerson = 'yes';
    } else if (!ans && this.question < 8){
      this.formData.isUSPerson = 'no';
    }else if(ans){
      this.formData.isUSPerson = 'no';
    } else if (!ans){
      this.formData.isUSPerson = 'yes';
    }

    this.question++;
    if(this.formData.isUSPerson == 'no' || this.question > 8){
      this.onReceive('Thank you');
      this.progress = 1;
      this.changePage();
    }
    else{
      this.onReceive(STATES.questions[this.question]);
      this.progress += this.progressStep;
      this.onCreatePicker(STATES.answers);
    }
  }
  else {
    this.onReceive('Please answer yes or no');
  }
}

changePage(){
  var months_pt = ["janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"];

  var today = new Date();
  this.formData.day = today.getDate();
  this.formData.month = months_pt[today.getMonth()];
  this.formData.year = today.getFullYear();

  //Send form data to server to fill and send pdf
  /*fetch('https://mywebsite.com/endpoint/', {
  method: 'POST',
  headers: {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
},
body: JSON.stringify(this.formData);
})*/

console.log(JSON.stringify(this.formData));
}

onReceive(text) {
  this.setState((previousState) => {
    return {
      messages: GiftedChat.append(previousState.messages, {
        _id: Math.round(Math.random() * 1000000),
        text: text,
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'WeShareAShare',
          // avatar: 'https://facebook.github.io/react/img/logo_og.png',
        },
      }),
    };
  });

  this.setState((previousState) => {
    return {
      typingText: null,
    };
  });
}

onCreatePicker(options) {
  this.setState((previousState) => {
    return {
      messages: GiftedChat.append(previousState.messages, {
        _id: Math.round(Math.random() * 1000000),
        createdAt: new Date(),
        user: {
          _id:1,
          name: 'You',
          // avatar: 'https://facebook.github.io/react/img/logo_og.png',
        },
        selectOption: {
          text: options,
        }
      }),
    };
  });

  this.setState((previousState) => {
    return {
      typingText: null,
    };
  });
}

renderCustomActions(props) {

  return (
    <CustomActions
    {...props}
    />
  );



  const options = {
    'Action 1': (props) => {
      alert('option 1');
    },
    'Action 2': (props) => {
      alert('option 2');
    },
    'Cancel': () => {},
  };
  return (
    <Actions
    {...props}
    options={options}
    />
  );
}

renderBubble(props) {
  return (
    <Bubble
    {...props}
    wrapperStyle={{
      left: {
        backgroundColor: '#f0f0f0',
      }
    }}
    />
  );
}

renderCustomView(props) {
  return (
    <CustomView
    {...props}
    />
  );
}

renderFooter(props) {
  if (this.state.typingText) {
    return (
      <View>
      <View style={styles.footerContainer}>
      <Text style={styles.footerText}>
      {this.state.typingText}
      </Text>
      </View>
      <View style={styles.progressBar} >
      <Progress.Bar progress={this.progress} width={200} />
      </View>
      </View>
    );
  }
  return (
    <View style={styles.progressBar} >
    <Progress.Bar progress={this.progress} width={200} />
    </View>);
  }

  render() {
    return (
      <GiftedChat
      messages={this.state.messages}
      onSend={this.onSend}
      loadEarlier={this.state.loadEarlier}
      onLoadEarlier={this.onLoadEarlier}
      isLoadingEarlier={this.state.isLoadingEarlier}

      user={{
        _id: 1, // sent messages should have same user._id
      }}

      renderActions={this.renderCustomActions}
      renderBubble={this.renderBubble}
      renderCustomView={this.renderCustomView}
      renderFooter={this.renderFooter}
      />


    );
  }
}

const styles = StyleSheet.create({
  footerContainer: {
    marginTop: 5,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
  },
  footerText: {
    fontSize: 14,
    color: '#aaa',
  },
  progressBar: {
    alignItems:"center",
    flex:1,
    marginBottom: 5,
    marginTop: 10
  },
});
