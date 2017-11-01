import React from 'react';

import {
    TouchableOpacity,
    StyleSheet,
    Text,
    View,
} from 'react-native';

import {GiftedChat, Actions, InputToolbar} from 'react-native-gifted-chat';
import CustomActions from './CustomActions';
import * as Progress from 'react-native-progress';

const STATES = require("./data/states.js");

export default class InvestorProfileQuiz extends React.Component {
    constructor(props) {
        super(props);

        this.formHeader = 0;
        this.messageIndex = 0;
        this.progress = 0;
        this.progressStep = 1 / STATES[this.formHeader].states.length;
        this.maxMessageIndex = 0;

        this.state = {
            messages: [],
            loadEarlier: true,
            typingText: null,
            isLoadingEarlier: false,
            optionsButtons: [],
            typingDisabled: false,
            skip: false
        };

        this._isMounted = false;
        this.onSend = this.onSend.bind(this);
        this.onReceive = this.onReceive.bind(this);
        this.renderCustomActions = this.renderCustomActions.bind(this);
        this.renderFooter = this.renderFooter.bind(this);
        this.onLoadEarlier = this.onLoadEarlier.bind(this);
        this.answerDemo = this.answerDemo.bind(this);
        this.renderInputToolbar = this.renderInputToolbar.bind(this);
        this.onPressActions = this.onPressActions.bind(this);

    }

    componentWillMount() {
        this._isMounted = true;

        this.maxMessageIndex = STATES[this.formHeader].states.length - 1;

        this.setState(() => {
            return {
                messages: [
                    {
                        _id: Math.round(Math.random() * 1000000),
                        text: STATES[this.formHeader].states[this.messageIndex].text,
                        options: STATES[this.formHeader].states[this.messageIndex].options,
                        renderAvatar: null,
                        user: {
                            _id: 2,
                            name: 'React Native'
                        }
                    }
                ]
            };
        });

        this.setState((previousState) => {
            const messages = previousState.messages
            return {
                optionsButtons: this.createOptionsButtons(messages[messages.length - 1].options),
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
            for (var i = 0, len = messages.length; i < len; i++) {
                messages[i].createdAt = null;
            }

            console.log(messages);
            return {
                messages: GiftedChat.append(previousState.messages, messages),
            };
        });
        this.answerDemo(messages);

    }


    answerUser(messages) {
        this.setState((previousState) => {
            return {
                messages: GiftedChat.append(previousState.messages, messages),
                optionsButtons: [],
            };
        });

        this.answerDemo([messages]);
    }


    answerDemo(messages) {

        console.log(messages);
        this.getStateMessage = function () {
            this.messageIndex++;

            if (this.messageIndex > this.maxMessageIndex) {
                this.formHeader++;
                this.maxMessageIndex = STATES[this.formHeader].states.length;
                this.messageIndex = 0;
                this.progress = 0;
                this.progressStep = 1 / STATES[this.formHeader].states.length;
            }
            return STATES[this.formHeader].states[this.messageIndex];
        }


        this.getDisplayMessage = function (message) {
            switch (message) {
                case "help":
                    return "Press the + button for additional options.";
                case "exit":
                    return "You can continue this later.";
                case "skip":
                    return "You can fill this field manually later or go back through options.\n" + this.getStateMessage();
                default:
                    return this.getStateMessage();
            }
            return "hey";
        }


        setTimeout(() => {
            if (this._isMounted === true) {
                if (messages.length > 0) {
                    // TODO check if first answer is yes then start form cycle
                    this.progress += this.progressStep;
                    var returnMessage = this.getDisplayMessage(messages["0"].text);

                    this.setState({optionsButtons: this.createOptionsButtons(returnMessage.options)});

                    this.onReceive(returnMessage.text);
                } else if(this.state.skip){
                    this.progress += this.progressStep;
                    this.state.skip = false;
                    var nextMessage = this.getStateMessage();
                    this.setState({optionsButtons: this.createOptionsButtons(nextMessage.options)});
                    this.onReceive(nextMessage.text);
                    //this.onReceive(this.getStateMessage());
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
                        _id: 2
                    },
                }),
            };
        });
    }

    createOptionsButtons = function (options) {

        if (options && options.length > 0) {
            let Items = options.map((s, i) => {

                return(
                <TouchableOpacity
                    key={i}
                    style={styles.options}
                    onPress={
                        () => this.answerUser({
                                _id: Math.round(Math.random() * 1000000),
                                text: s,
                                user: {_id: 1},
                            }
                        )}
                >
                    <Text style={{fontSize: 16}}>{s}</Text>
                </TouchableOpacity>
                );
            });
            console.log(Items);
            return Items;
        }
        return [];
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
        if(this.state.optionsButtons.length > 0){
            props.textInputProps.editable = false;
            props.textInputProps.placeholder= "Choose an option from above";
        } 
        return (
            <InputToolbar
                {...props}
            />);
    }

    onPressActions(option) {
        //for skipping 
        this.state.skip = true;
        this.answerDemo([]);
    }


    render() {
        return (
            <View style={styles.backgroundChat}>
            <GiftedChat
                messages={this.state.messages}
                onSend={this.onSend}
                isLoadingEarlier={this.state.isLoadingEarlier}
                onPress={this.onPress}
                textInputProps={this.textInputProps}

                user={{
                    _id: 1, // sent messages should have same user._id
                }}

                renderAvatar={null}
                renderActions={this.renderCustomActions}
                renderFooter={this.renderFooter}
                renderInputToolbar={this.renderInputToolbar}
                onPressAvatar={this.onPressActions} 
            />
            </View>


        );
    }
}

const styles = StyleSheet.create({
    backgroundChat: {
        backgroundColor : "#6f946c",
        flex: 1
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
    },
    options: {
        backgroundColor: "#e6e6fa", 
        minWidth: 20, 
        alignSelf: "stretch", 
        alignItems: "center", 
        borderRadius: 30, 
        marginHorizontal: 20, 
        marginBottom: 10
    }
});
