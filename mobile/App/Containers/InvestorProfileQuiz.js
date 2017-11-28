import React from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    Text,
    Keyboard,
    View,
    KeyboardAvoidingView,
    Platform,
} from 'react-native';

import { GiftedChat, Actions, InputToolbar, Bubble } from 'react-native-gifted-chat';
import ReduxNavigation from '../Navigation/ReduxNavigation';
import { NavigationActions } from 'react-navigation';
import CustomActions from './CustomActions';
import * as Progress from 'react-native-progress';
const STATES = require('./data/states.js');

export default class InvestorProfileQuiz extends React.Component {
    constructor(props) {
        super(props);

        this.formHeader = props.navigation.state.params.formIndex;
        this.messageIndex = 0;
        this.progress = 0;
        this.maxMessageIndex = 0;
        this.currentHeader = 0;
        this.progressStep = 1 / STATES[this.currentHeader].states.length;

        this.state = {
            messages: [],
            loadEarlier: true,
            typingText: null,
            isLoadingEarlier: false,
            optionsButtons: [],
            typingDisabled: false,
            skip: false,
            questions: STATES[1].states,
            currentQuestionKey: null,
            answers: {}
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
        this.chooseQuestion = this.chooseQuestion.bind(this);
        this.endForm = this.endForm.bind(this);
    }

    componentWillMount() {
        this._isMounted = true;

        this.maxMessageIndex = STATES[this.currentHeader].states.length - 1;

        this.setState(() => {
            return {
                messages: [
                    {
                        _id: Math.round(Math.random() * 1000000),
                        text: STATES[this.currentHeader].states[this.messageIndex].text,
                        options: STATES[this.currentHeader].states[this.messageIndex].options,
                        renderAvatar: null,
                        user: {
                            _id: 2,
                            name: 'React Native',
                        },
                    },
                ],
            };
        });

        this.setState((previousState) => {
            const messages = previousState.messages;
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
            for (let i = 0, len = messages.length; i < len; i++) {
                messages[i].createdAt = null;
                // TODO passa a key da pergunta para identificar o parametro a enviar
                messages[i].key = this.state.currentQuestionKey;
            }

            console.log(messages);
            return {
                messages: GiftedChat.append(previousState.messages, messages),
            };
        });
        this.answerDemo(messages);
    }

    endForm() {
        const { navigate } = this.props.navigation;

        const sendForm = function (form) {
            fetch('https://127.0.0.1:3000/endpoint/', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(form),
            });
        };

        const form = STATES[this.currentHeader - 1];
        const jsonToSend = {};
        jsonToSend[form.id] = {};
        const answers = [];
        const messages = this.state.messages;

        //sendForm(jsonToSend);
        navigate('FormOverview');
    }


    answerUser(messages) {
        // TODO passa a key da pergunta para identificar o parametro a enviar
        messages.key = this.state.currentQuestionKey;
        this.setState((previousState) => {
            return {
                messages: GiftedChat.append(previousState.messages, messages),
                optionsButtons: [],
            };
        });

        this.answerDemo([messages]);
    }


    answerDemo(messages) {
        this.getStateMessage = function () {
            this.messageIndex++;
            if (this.messageIndex >= this.maxMessageIndex) {
                if(this.currentHeader !== 0){
                    this.endForm();
                    return;
                }
                this.currentHeader = this.formHeader;
                this.maxMessageIndex = STATES[this.currentHeader].states.length;
                this.messageIndex = 0;
                this.progress = 0;
                this.progressStep = 1 / STATES[this.currentHeader].states.length;
            }
            return STATES[this.currentHeader].states[this.messageIndex];
        };

        this.saveAnswer = function (key, answer){
            if(this.state.answers[key] === null || this.state.answers[key] === undefined)
            this.progress += this.progressStep;
            this.state.answers[key] = answer;
        };

        setTimeout(() => {
            if (this._isMounted === true) {
                if (messages.length > 0) {
                    // TODO check if first answer is yes then start form cycle

                    if(messages[0].key !== undefined && messages[0].key != null){
                        this.saveAnswer(messages[0].key, messages[0].text);
                    }
                    const returnMessage = this.getStateMessage();
                    if(returnMessage == null || returnMessage == undefined){
                        return;
                    }
                    this.state.currentQuestionKey = returnMessage.key;
                    this.setState({ optionsButtons: this.createOptionsButtons(returnMessage.options) });

                    this.onReceive(returnMessage.text);
                } else if (this.state.skip) {
                    this.state.skip = false;
                    const nextMessage = this.getStateMessage();
                    this.state.currentQuestionKey = nextMessage.key;
                    this.setState({ optionsButtons: this.createOptionsButtons(nextMessage.options) });
                    this.onReceive(nextMessage.text);
                }
            }
        }, 1000);
    }

    onReceive(text) {
        this.setState((previousState) => {
            return {
                messages: GiftedChat.append(previousState.messages, {
                    _id: Math.round(Math.random() * 1000000),
                    text,
                    renderAvatar: null,
                    user: {
                        _id: 2,
                    },
                }),
            };
        });
    }

    createOptionsButtons = function (options) {
        if (options && options.length > 0) {
            const Items = options.map((s, i) => {
                return (
                    <TouchableOpacity
                        key={i}
                        style={styles.options}
                        onPress={
                            () => this.answerUser({
                                _id: Math.round(Math.random() * 1000000),
                                text: s,
                                user: { _id: 1 },
                            },
                        )}
                    >
                        <Text style={{ fontSize: 16 }}>{s}</Text>
                    </TouchableOpacity>
                );
            });
            console.log(Items);
            return Items;
        }
        return [];
    }

    chooseQuestion(questionId) {
        const questions = this.state.questions;
        let index;

        const getQuestionFromKey = function (id) {
            for (const key in questions) {
                if (questions.hasOwnProperty(key)) {
                    const element = questions[key];
                    if (id === element.key) {
                        index = parseInt(key);
                        return element;
                    }
                }
            }
        };

        const question = getQuestionFromKey(questionId);
        this.messageIndex = index;
        this.state.currentQuestionKey = question.key;
        this.setState({ optionsButtons: this.createOptionsButtons(question.options) });
        this.onReceive(question.text);
    }

    renderCustomActions(props) {
        props.chooseQuestion = this.chooseQuestion;
        return (
            <CustomActions
                answers={this.state.answers}
                chooseQuestion={this.chooseQuestion}
                {...props}
            />
        );
    }

    renderFooter(props) {

        return (
            <View style={{ alignItems: 'center' }}>
                {this.state.optionsButtons}
                <View style={styles.progressBar}>
                    <Progress.Bar progress={this.progress} width={200} />
                </View>
            </View>
        );
    }

    renderInputToolbar(props) {
        const toolbar = InputToolbar;
        if (this.state.optionsButtons.length > 0) {
            props.textInputProps.editable = false;
            props.textInputProps.placeholder = 'Choose an option from above';
        }
        return (
            <InputToolbar
                {...props}
            />
        );
    }

    onPressActions(option) {
        // for skipping
        this.state.skip = true;
        this.answerDemo([]);
    }

    renderBubble(props) {
        return (
            <Bubble
                {...props}
                wrapperStyle={
                    {
                        left: {
                            backgroundColor: '#D3D3D3',
                        },
                        right: {
                            backgroundColor: '#7cc0d2',
                        },
                    }
                }
                textStyle={
                    {
                        right: {
                            color: '#000000',
                        },
                    }
                }
            />
        );
    }


    render() {
        //READ ME if you are wondering if this could not be refactored into shorter code,
        //just know that react native is a bitch and will fuck you
        if(Platform.OS === 'android'){
            return (
                <KeyboardAvoidingView style={styles.backgroundChat} behavior="padding">
                    <GiftedChat
                        messages={this.state.messages}
                        onSend={this.onSend}
                        isLoadingEarlier={this.state.isLoadingEarlier}
                        onPress={this.onPress}
                        textInputProps={this.textInputProps}

                        user={{
                            _id: 1, // sent messages should have same user._id
                        }}
                        renderBubble={this.renderBubble}
                        renderAvatar={null}
                        renderActions={this.renderCustomActions}
                        renderFooter={this.renderFooter}
                        renderInputToolbar={this.renderInputToolbar}
                        onPressAvatar={this.onPressActions}
                    />
                </KeyboardAvoidingView>
            );
        } else{
            return (
                <View  style={styles.backgroundChat}>
                    <GiftedChat
                        messages={this.state.messages}
                        onSend={this.onSend}
                        isLoadingEarlier={this.state.isLoadingEarlier}
                        onPress={this.onPress}
                        textInputProps={this.textInputProps}

                        user={{
                            _id: 1, // sent messages should have same user._id
                        }}
                        renderBubble={this.renderBubble}
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
}

const styles = StyleSheet.create({
    backgroundChat: {
        backgroundColor: '#455A64',
        flex: 1,
    },
    progressBar: {
        alignItems: 'center',
        flex: 1,
        marginBottom: 5,
        marginTop: 10,
    },
    learnMore: {
        backgroundColor: '#b4b3b6',
        alignSelf: 'stretch',
        alignItems: 'center',
        minHeight: 25,
        minWidth: 20,
        borderRadius: 30,
        marginHorizontal: 20,
        paddingTop: 5,
    },
    options: {
        backgroundColor: '#d8d8d8',
        minWidth: 20,
        minHeight: 25,
        alignSelf: 'stretch',
        alignItems: 'center',
        borderRadius: 30,
        marginHorizontal: 20,
        marginBottom: 10,
    },
});
