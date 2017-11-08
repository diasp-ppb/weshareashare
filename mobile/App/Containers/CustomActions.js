import PropTypes from 'prop-types';
import React from 'react';
import {
    Modal,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    View,
    ViewPropTypes,
    Text,
} from 'react-native';

import NavBar, { NavButton, NavButtonText, NavTitle } from 'react-native-nav';

const STATES = require("./data/states.js");

export default class CustomActions extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            modalVisible: false,
            changeAnswer: false,
            questions: STATES[1].states,
        };
        this.onActionsPress = this.onActionsPress.bind(this);
        this.selectImages = this.selectImages.bind(this);
        this.changeAnswersSheet = this.changeAnswersSheet.bind(this);
        this.renderRepeatQuestions = this.renderRepeatQuestions.bind(this);
        this.getQuestion = this.getQuestion.bind(this);
    }

    setModalVisible(visible = false) {
        this.setState({modalVisible: visible});
    }
    setModalQuestionsVisible(visible = false) {
        this.setState({changeAnswer: visible});
    }

    onActionsPress() {
        let options = ['Skip question', 'Edit previous answers', 'Help', 'Cancel'];

        const cancelButtonIndex = options.length - 1;
        this.context.actionSheet().showActionSheetWithOptions({
                options,
                cancelButtonIndex,
            },
            (buttonIndex) => {
                switch (buttonIndex) {
                    case 0:
                        //skip option
                        if(this.subsection !== 1){
                            this.props.onPressAvatar();
                        }
                        break;
                    case 1:
                        //change answer
                        this.state.questions.push({key:"CANCEL"});
                        this.setModalQuestionsVisible(true);
                        this.setModalVisible(false);
                        break;

                    case 2:
                        //help
                    default:
                }
            });
    }

    changeAnswersSheet(item) {
        return(
            <Text style={styles.item}> {item.key} </Text>
        );
    }

    getQuestion(key){
        this.setModalQuestionsVisible(false);
        if(key !== "CANCEL")
            this.props.chooseQuestion(key);
    }

    selectImages(images) {
        this.setImages(images);
    }

    renderRepeatQuestions(){
        const answered = function(answeredQuestion){
            return ;
        }
        return (
            <View style={styles.previous}>
                <FlatList
                data={this.state.questions}
                renderItem={({item}) => 
                    <TouchableOpacity onPress={() => this.getQuestion(item.key)}>
                        <Text  style={styles.item}>{item.key}</Text>
                        {item.answer !== undefined && item.answer !== null ? answered(true) : answered(false)}
                    </TouchableOpacity>
                }
                />
            </View>
        );
    }

    renderIcon() {
        if (this.props.icon) {
            return this.props.icon();
        }
        return (
            <View
                style={[styles.wrapper, this.props.wrapperStyle]}
            >
                <Text
                    style={[styles.iconText, this.props.iconTextStyle]}
                >
                    +
                </Text>
            </View>
        );
    }

    render() {
        return (
            <View>
                <TouchableOpacity
                    style={[styles.container, this.props.containerStyle]}
                    onPress={this.onActionsPress}
                >
                    <Modal
                        animationType={'slide'}
                        transparent={false}
                        visible={this.state.modalVisible}
                        onRequestClose={() => {this.setModalVisible(false);}}
                    >
                    </Modal>
                    {this.renderIcon()}
                </TouchableOpacity>

                <Modal
                    style={styles.options}
                    animationType={'slide'}
                    transparent={false}
                    visible={this.state.changeAnswer}
                    onRequestClose={() => {this.setModalQuestionsVisible(false);}}
                >
                    {this.renderRepeatQuestions()}
                </Modal>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: 26,
        height: 26,
        marginLeft: 10,
        marginBottom: 10,
    },
    wrapper: {
        borderRadius: 13,
        borderColor: '#b2b2b2',
        borderWidth: 2,
        flex: 1,
    },
    iconText: {
        color: '#b2b2b2',
        fontWeight: 'bold',
        fontSize: 16,
        backgroundColor: 'transparent',
        textAlign: 'center',
    },
    options: {
        alignSelf: "stretch",
    },
    previous: {
        flex: 1,
        paddingTop: 22
    },
    item: {
        flex: 9,
        padding: 10,
        fontSize: 18,
        height: 44,
    },
});

CustomActions.contextTypes = {
    actionSheet: PropTypes.func,
};

CustomActions.defaultProps = {
    onSend: () => {},
    options: {},
    icon: null,
    containerStyle: {},
    wrapperStyle: {},
    iconTextStyle: {},
    chooseQuestion: () => {},
};

CustomActions.propTypes = {
    onSend: PropTypes.func,
    options: PropTypes.object,
    icon: PropTypes.func,
    containerStyle: ViewPropTypes.style,
    wrapperStyle: ViewPropTypes.style,
    iconTextStyle: Text.propTypes.style,
    chooseQuestion: PropTypes.func,
};
