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

const STATES = require("./data/states.js");

export default class InvestorProfileQuiz extends React.Component {
    constructor(props) {
        super(props);

        this.formHeader = 0;
        this.messageIndex = -1;
        this.progress = 0;
        this.progressStep = 1 / STATES[this.formHeader].states.length;

        this.state = {
            messages: [],
            loadEarlier: true,
            typingText: null,
            isLoadingEarlier: false
        };

        this.messages = {}

        this._isMounted = false;
        this.onSend = this.onSend.bind(this);
        this.onReceive = this.onReceive.bind(this);
        this.renderCustomActions = this.renderCustomActions.bind(this);
        this.renderBubble = this.renderBubble.bind(this);
        this.renderFooter = this.renderFooter.bind(this);
        this.onLoadEarlier = this.onLoadEarlier.bind(this);
        this.answerDemo = this.answerDemo.bind(this);

    }

    componentWillMount() {
        this._isMounted = true;
        this.setState(() => {
            return {
                messages: require('./data/messages.js'),
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
                        messages: GiftedChat.prepend(previousState.messages, require('./data/old_messages.js')),
                        loadEarlier: false,
                        isLoadingEarlier: false,
                    };
                });
            }
        }, 1000); // simulating network
    }

    onSend(messages = []) {
        this.setState((previousState) => {

                if (previousState.messages[0].selectOption) {
                    return {
                        messages: previousState.messages,
                    }
                } else {
                    return {
                        messages: GiftedChat.append(previousState.messages, messages),
                    };
                }

            }
        )
        ;
        this.answerDemo(messages);
    }

    chooseOption(text) {
        onSend({
            _id: Math.round(Math.random() * 1000000),
            text: 'React Native lets you build mobile apps using only JavaScript',
            createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
            user: {
                _id: 1,
                name: 'Developer',
            },
        })
    }

    answerDemo(messages) {
        this.getDisplayMessage = function (message) {
            switch (message) {
                case "help":
                    return "Press the + button for additional options.";
                case "exit":
                    return "You can continue this later.";
                case "skip":
                    this.messageIndex++;
                    return "You can fill this field manually later or go back through options.\n" + STATES[this.formHeader].states[this.messageIndex];
                default:

                    this.messageIndex++;
                    return STATES[this.formHeader].states[this.messageIndex];
            }
            return "hey";
        }

        setTimeout(() => {
            if (this._isMounted === true) {
                if (messages.length > 0) {
                    // TODO check if first answer is yes then start form cycle
                    this.progress += this.progressStep;
                    var returnMessage = this.getDisplayMessage(messages[0].text)
                    this.onReceive(returnMessage);
                }
            }
        }, 1000);
    }

    onReceive(text) {
        this.setState((previousState) => {
            return {
                messages: GiftedChat.append(previousState.messages, {
                    _id: Math.round(Math.random() * 1000000),
                    text: text,
                    renderAvatar: null,
                    user: {
                        _id: 2,
                        name: 'React Native',
                        avatar: 'https://avatars0.githubusercontent.com/u/16372771?s=460&v=4',

                    },
                }),
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

    renderBubble(props) {
        return (
            <Bubble
                {...props}
                wrapperStyle={{
                    left: {
                        backgroundColor: '#fff000',
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
        nothing = function () {

        };

        return (

            <View style={{alignItems: "center"}}>
                <Button
                    onPress={nothing}
                    title="Learn More"
                    color="#26c6da"
                    style={styles.button}
                    accessibilityLabel="Learn more about this purple button"
                />
                <View style={styles.progressBar}>
                    <Progress.Bar progress={this.progress} width={200}/>
                </View>
            </View>
        );

    }
    
    render() {
        return (
            <GiftedChat
                messages={this.state.messages}
                onSend={this.onSend}
                isLoadingEarlier={this.state.isLoadingEarlier}
                onPress={this.onPress}

                user={{
                    _id: 1, // sent messages should have same user._id
                }}

                renderAvatar={null}
                renderMessages={this.renderCom}
                renderActions={this.renderCustomActions}
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
    },
    footerText: {
        fontSize: 14,
        color: '#aaa',
    },
    progressBar: {
        alignItems: "center",
        flex: 1,
        marginBottom: 5,
        marginTop: 10
    },
    button: {
        marginBottom: 10,
        alignItems: "center",

    }
});
