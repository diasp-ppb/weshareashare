import React from 'react';

import {
    TouchableOpacity,
    Platform,
    StyleSheet,
    Text,
    Button,
    View,
    Picker,
    AsyncStorage,
} from 'react-native';

import {GiftedChat, Actions, Bubble} from 'react-native-gifted-chat';
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
    this.isUSPersonAnswers = new Array(6);

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

        if(state.messages.length != 0){
          this.setState(() => {
            return {
              messages: [state.messages[0]],
              loadEarlier: true,
            };
          });
        }
      }
      else{
        this.askNextQuestion();
      }
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
              messages: state.messages,
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
            typingText: 'React Native is typing'
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
    this.progress += this.progressStep;

    if(this.question > 1 && this.question < NO_QUESTIONS){
      this.createOptionsButtons(state.answers);
    }
    else{
      this.createOptionsButtons(null);
    }

    if(this.question >= NO_QUESTIONS){
      this.onReceive('Thank you!');
      this.changePage();
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

    state.messages = this.state.messages;

    AsyncStorage.setItem("fatca", JSON.stringify(state));
    console.log("Saved");
  }

  changePage(){
    //TODO Check if form is complete
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

    //Prepare data to be sent
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

  createOptionsButtons(options) {
    var view = null;

      if (options) {

          let Items = options.map((s, i) => {

              return <Button
                  style={styles.button}
                  onPress={() => {

                    this.setState({
                      options: [s],
                      selected: s,
                      picked: true,
                    });


                    this.onSend([{
                      _id: Math.round(Math.random() * 1000000),
                      text: s,
                      renderAvatar: null,
                      createdAt: new Date(),
                      user: {
                        _id: 1
                      },
                    }]);

                  }
                }
                key={i}
                title={s}
                color="#000000"
                accessibilityLabel={s}
              />

          });


          view = (
              <TouchableOpacity style={[styles.container, this.props.containerStyle]}>
                  {Items}
              </TouchableOpacity>
          );
      }

      this.setState(
        {
          optionsButtons: view,
        }
      );
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
      <View>
        <View>
            {this.state.optionsButtons}
            <Button
            style={styles.button}
            onPress={function () {}}
            title={"More info"}
            color="#000000"
            accessibilityLabel={"More info"}
            />
        </View>
        <View style={styles.progressBar} >
          <Progress.Bar progress={this.progress} width={200} />
        </View>
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
        renderFooter={this.renderFooter}
        />


      );
    }
  }
