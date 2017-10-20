import PropTypes from 'prop-types';
import React from 'react';
import {
    Button,
    StyleSheet,
    TouchableOpacity,
    ViewPropTypes,
} from 'react-native';


export default class CustomView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            options: [],
            selected: null,
            picked: false
        };
    }

    render() {
        let options = this.props.currentMessage.selectOption;

        if (options) {
            if (this.state.selected === null && !this.state.picked) {
                this.setState(options);
            }
            let Items = this.state.options.map((s, i) => {

                return <Button
                    style={styles.button}
                    onPress={() => {

                        this.setState({
                            options: [s],
                            selected: s,
                            picked: true,
                        });

                        this.props.currentMessage.picked = true;
                        this.props.onSend(s);

                    }
                    }
                    title={s}
                    disabled={this.state.picked}
                    color="#FFFFFF"
                    accessibilityLabel={s}
                />

            });


            return (
                <TouchableOpacity style={[styles.container, this.props.containerStyle]}>
                    {Items}
                </TouchableOpacity>
            );
        }
        return null;
    }
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 13,
        marginTop: 8,
        paddingTop: 5,
    },
    button: {

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
