import React from 'react';

import {
    TouchableOpacity,
    StyleSheet,
    Text,
    View,
    AsyncStorage,
} from 'react-native';

import {GiftedChat, Actions, InputToolbar} from 'react-native-gifted-chat';
import CustomActions from './CustomActions';
import * as Progress from 'react-native-progress';

import styles from './Styles/FormStyle';

const STATES = (require("./data/fatcaStates.js")).states;
const NO_QUESTIONS = 8;

export default class FatcaFormQuiz extends React.Component {

  constructor(props) {
    super(props);

    this.formHeader = 0;
    this.progress = 0;
    this.progressStep = 1/STATES.length;
    this.previousMessages;

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
    this.renderFooter = this.renderFooter.bind(this);
    this.onLoadEarlier = this.onLoadEarlier.bind(this);
    this.renderInputToolbar = this.renderInputToolbar.bind(this);

    this.question = 0;
    this.isUSPersonAnswers = new Array(6);

    this.formData = {
      name: null,
      NIF: null,
      isUSPerson: null,
    };
  }

  componentWillMount() {
    //AsyncStorage.clear();

    this._isMounted = true;
    this.setState(() => {
      return {
        messages: [],
      };
    });

    AsyncStorage.getItem("fatca").then((value) => {
      if(value != null){
        var state = JSON.parse(value);
        this.progress = state.progress;
        this.question = state.question;
        this.formData = state.formData;
        this.isUSPersonAnswers = state.isUSPersonAnswers;
        this.previousMessages = state.messages;
        this.previousMessages.shift();

        if(state.messages.length > 0){
          this.setState(() => {
            return {
              loadEarlier: true,
            };
          });
        }
      }
        this.askNextQuestion();
    }).done();
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
        AsyncStorage.getItem("fatca").then((value) => {
          var state = JSON.parse(value);

          this.setState((previousState) => {
            return {
              messages: GiftedChat.prepend(previousState.messages, this.previousMessages),
              loadEarlier: false,
              isLoadingEarlier: false,
            };
          });

        }).done();
      }
    }, 1000); // simulating network
  }

  onSend(messages = []) {
    this.setState((previousState) => {
      return {
        messages: GiftedChat.append(previousState.messages, messages),
      };
    });

    this.answerForm(messages);
  }


  answerForm(messages) {
    if (messages.length > 0) {
      if (this.question) {
        this.setState((previousState) => {
          return {
            typingText: 'WeShareAShare is typing'
          };
        });
      }
    }

    setTimeout(() => {
      if (this._isMounted === true) {
        if (messages.length > 0) {
          var valid;
          var msg = messages[0].text;

          if((/(skip)$/i).test(msg)){
            this.question++;
            this.askNextQuestion();
          }
          else{
            switch (this.question) {
              case 0:
              valid = this.validateName(msg);
              break;
              case 1:
              valid = this.validateNIF(msg);
              break;
              default:
              valid = this.validateBoolean(msg);
            }

            if(valid){
              this.question++;
              this.progress += this.progressStep;

              this.askNextQuestion();
            }
          }
        }
      }
    }, 1000);
  }

  validateName(message){
    if(message != null && /^[A-Za-záãẽêéíóôõúç\s]+$/.test(message)){
      //Save data
      this.formData.name = message;

      return true;
    }
    else{
      this.onReceive('Name not valid. Please try again');

      return false;
    }
  }

  validateNIF(message){
    if((/^\d{9}$/).test(message)){
      return true;
    }
    else{
      this.onReceive('NIF not valid. Please try again');
      return false;
    }
  }

  validateBoolean(message){
    if((/(yes|no)$/i).test(message)){
      var ans = (/(yes)$/i).test(message);
      //Save data
      this.isUSPersonAnswers[this.question - 2] = ans;

      return true;
    }
    else {
      this.onReceive('Please select the correct option');

      return false;
    }
  }

  askNextQuestion(){
    var state = STATES[this.question];
    var options;

    if(this.question < NO_QUESTIONS){
      options = this.createOptionsButtons(state.answers);
    }
    else{
      options = this.createOptionsButtons(null);
    }
    this.setState({optionsButtons: options});

    if(this.question >= NO_QUESTIONS){
      if(this.progress == 1){
        this.onReceive('Thank you!');
        this.changePage();
      }
      else{
        //TODO make user fill the missing information
        this.onReceive('Data missing');
      }
    }
    else{
        this.onReceive(state.question);
    }

    this.saveData();
  }

  saveData() {
    var state = {};

    state.progress = this.progress
    state.question = this.question;
    state.formData = this.formData;
    state.isUSPersonAnswers = this.isUSPersonAnswers;

    if(this.state.loadEarlier){
      state.messages = this.state.messages.concat(this.previousMessages);
    }
    else{
      state.messages = this.state.messages;
    }

    AsyncStorage.setItem("fatca", JSON.stringify(state));
    console.log("Saved");
  }

  changePage(){
    //Determine if person is US Person
    if(this.isUSPersonAnswers[this.isUSPersonAnswers.length-1] == false){
      this.formData.isUSPerson = 'yes';

      for (var i = 0; i < this.isUSPersonAnswers.length-1; i++) {
        if(this.isUSPersonAnswers[i] == false){
          this.formData.isUSPerson = 'no';
          break;
        }
      }
    }
    else{
      this.formData.isUSPerson = 'no';
    }

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
          createdAt: null,
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

  createOptionsButtons = function (options) {

      if (options) {
          let Items = options.map((s, i) => {
              return(
                <TouchableOpacity
                  key={i}
                  style={styles.options}
                  onPress={
                      () => this.onSend([{
                              _id: Math.round(Math.random() * 1000000),
                              text: s,
                              user: {_id: 1},
                          }]
                      )}
              >
                <Text style={{fontSize: 16}}>{s}</Text>
              </TouchableOpacity>
              );
          });
          return Items;
      }
      return null;
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
          'Cancel': () => {
          },
      };
      return (
          <Actions
              {...props}
              options={options}
          />
      );
  }

  renderFooter(props) {

      nothing = function () {

      };


      return (
          <View style={{alignItems: "center"}}>
              {this.state.optionsButtons}
              <TouchableOpacity
                  style={{backgroundColor: "#ffffff"}}
                  onPress={
                      nothing
                  }
              >
                  <Text> Learn More </Text>
              </TouchableOpacity>
              <View style={styles.progressBar}>
                  <Progress.Bar progress={this.progress} width={200}/>
              </View>
          </View>
      );

  }

  renderInputToolbar(props) {
      const toolbar = InputToolbar;
      if(this.state.optionsButtons){
          return null;
      } else return (
              <InputToolbar
                  {...props}
              />
          );

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
        renderFooter={this.renderFooter}        
        renderInputToolbar={this.renderInputToolbar}
        />


      );
    }
  }
