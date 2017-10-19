import PropTypes from 'prop-types';
import React from 'react';
import {
    Button,
    Linking,
    Platform,
    StyleSheet,
    TouchableOpacity,
    ViewPropTypes,
} from 'react-native';


export default class CustomView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            options : [],
            selected: null
        };
    }

    render() {
        let options = this.props.currentMessage.selectOption;

        if (options) {
            if(this.state.selected === null) {
                this.setState( {options: options.text,
                                selected: options.text[0]});
            }
            let Items = this.state.options.map( (s, i) => {

                return <Button
                    style={styles.button}
                    onPress={() => {
                                        this.props.onSend(s);
                                        this.setState({options:  [this.state.selected]});
                                    }
                            }
                    title={s}
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                    />

            });

            return (
                <TouchableOpacity style={[styles.container, this.props.containerStyle]} onPress={() => {
                    this.state.pressed = true;
                }}>
                        {Items}
                </TouchableOpacity>
            );
        }
        return null;
    }
}

const styles = StyleSheet.create({
    container: {
        borderTop: 8,
        borderRadius: 13,
    },
    button: {
        height: 5,
        borderRadius: 13,
        opacity:0
    },

});

CustomView.defaultProps = {
    currentMessage: {},
    containerStyle: {},
    mapViewStyle: {},
};

CustomView.propTypes = {
    currentMessage: PropTypes.object,
    containerStyle: ViewPropTypes.style,
    mapViewStyle: ViewPropTypes.style,
};