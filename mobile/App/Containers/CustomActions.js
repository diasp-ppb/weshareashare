import PropTypes from 'prop-types';
import React from 'react';
import {
    Modal,
    StyleSheet,
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
        this._images = [];
        this.state = {
            modalVisible: false,
        };
        this.onActionsPress = this.onActionsPress.bind(this);
        this.selectImages = this.selectImages.bind(this);
        this.subsection = -1;
    }

    setImages(images) {
        this._images = images;
    }

    getImages() {
        return this._images;
    }

    setModalVisible(visible = false) {
        this.setState({modalVisible: visible});
    }

    onActionsPress() {
        let options;

        switch (this.subsection) {
            case 1:
                options = STATES[0].states;
                break;
            default:
                options = ['Skip question', 'Edit previous answers', 'Help', 'Cancel'];

        }

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
                            this.props.onSend({
                                _id: Math.round(Math.random() * 1000000),
                                text: 'skip',
                                renderAvatar: null,
                                user: {
                                    _id: 1,
                                    name: 'You',
                                    //avatar: 'https://avatars0.githubusercontent.com/u/16372771?s=460&v=4',
                                },
                            });
                        }
                        break;
                    case 1:
                        //change previous answer
                        break;

                    case 2:
                        //help
                    default:
                }
                if(this.subsection !== 1){
                    this.subsection = buttonIndex;
                } else{
                    this.subsection = -1;
                }
            });
    }

    selectImages(images) {
        this.setImages(images);
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
            <TouchableOpacity
                style={[styles.container, this.props.containerStyle]}
                onPress={this.onActionsPress}
            >
                <Modal
                    animationType={'slide'}
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        this.setModalVisible(false);
                    }}
                >
                </Modal>
                {this.renderIcon()}
            </TouchableOpacity>
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
};

CustomActions.propTypes = {
    onSend: PropTypes.func,
    options: PropTypes.object,
    icon: PropTypes.func,
    containerStyle: ViewPropTypes.style,
    wrapperStyle: ViewPropTypes.style,
    iconTextStyle: Text.propTypes.style,
};
