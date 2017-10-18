import React from 'react';

import {
    Platform,
    StyleSheet,
    Text,
    View,
    Picker
} from 'react-native';

import {GiftedChat, Actions, Bubble} from 'react-native-gifted-chat';
import CustomActions from './CustomActions';
import CustomView from './CustomView';

export default class FatcaFormQuiz extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            messages: [],
            loadEarlier: true,
            typingText: null,
            isLoadingEarlier: false,
        };

        this.messages  = {

        }

        this._isMounted = false;
        this.onSend = this.onSend.bind(this);
        this.onReceive = this.onReceive.bind(this);
        this.renderCustomActions = this.renderCustomActions.bind(this);
        this.renderBubble = this.renderBubble.bind(this);
        this.renderFooter = this.renderFooter.bind(this);
        this.onLoadEarlier = this.onLoadEarlier.bind(this);

        this.question = 1;
    }

    componentWillMount() {
        this._isMounted = true;
        this.setState(() => {
            return {
                messages: require('./data/fatca_form_questions.js'),
            };
        });
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
                      case 1:
                        this.validateName(messages[0]);
                        break;
                      case 2:
                        this.validateNIF(messages[0]);
                        break;
                      case 3:
                        this.validateBoolean(messages[0]);
                      default:
                        this.changePage();
                    }
                }
            }
        }, 1000);
    }

    validateName(message){
      if(true){
        this.onReceive('What is your NIF?');
        this.question++;
      }
      else{
        this.onReceive('Name not valid. Please try again');
      }
    }

    validateNIF(message){
      fetch('http://www.nif.pt/?json=1&q=' + message.text + '&key=key')
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        if(responseJson.is_nif /*&& responseJson.nif_validation*/){
          this.onReceive('Are you a US Person?');
          this.question++;
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
      //TODO: Change this
      if(message.text == "Yes" || message.text == "No" || message.text == "yes" || message.text == "no"){
        this.onReceive('');
      }
      else {
        this.onReceive('Please answer yes or no');
      }
    }

    changePage(){
      console.log("Pretend page was changed");
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
                <View style={styles.footerContainer}>
                    <Text style={styles.footerText}>
                        {this.state.typingText}
                    </Text>
                </View>
            );
        }
        return null;
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
});
