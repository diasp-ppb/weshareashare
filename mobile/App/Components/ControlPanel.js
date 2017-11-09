import React, { Component, PropTypes } from 'react';
import {
    View,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
} from 'react-native'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';




export default class ControlPanel extends Component {
    static contextTypes = {
        drawer: PropTypes.object.isRequired,
    };

    render() {
        return (
            <ScrollView style={styles.container}>
                <Text style={styles.controlText}>WeShareAShare</Text>
                <View>
                    <Icon name="account" size={30} color="#fff" />
                    <Text> User Name </Text>
                    <Text> email.exemplo@stoik.com </Text>
                </View>
                <View>
                    <TouchableOpacity style={styles.button} onPress={this.context.drawer.close}>
                        <Icon name="comment-text" size={30} color="#fff"/>

                        <Text>Notification</Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <Text style={styles.controlText}>Save</Text>
                    <TouchableOpacity style={styles.button} onPress={this.context.drawer.close}>
                        <Icon name="trending-up" size={30} color="#fff"/>
                        <Text>Simulation</Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <Text style={styles.controlText}>Invest</Text>
                    <TouchableOpacity style={styles.button} onPress={this.context.drawer.close}>
                        <Icon name="folder-multiple-outline" size={30} color="#fff"/>
                        <Text>Portfolio</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={this.context.drawer.close}>
                        <Icon name="poll" size={30} color="#fff"/>
                        <Text>Profitability</Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <Text style={styles.controlText}>Share</Text>
                    <TouchableOpacity style={styles.button} onPress={this.context.drawer.close}>
                        <Icon name="tab" size={30} color="#fff"/>
                        <Text>WeShareAShare</Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <Text style={styles.controlText}>More</Text>
                    <TouchableOpacity style={styles.button} onPress={this.context.drawer.close}>
                        <Icon name="poll" size={30} color="#fff"/>
                        <Text>FAQ</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={this.context.drawer.close}>
                        <Icon name="email" size={30} color="#fff" />
                        <Text>Contact us</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={this.context.drawer.close}>
                        <Icon name="information-variant" size={30} color="#fff"/>
                        <Text>About us</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={this.context.drawer.close}>
                        <Icon name="power" size={30} color="#fff"/>
                        <Text>Logout</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#455A63',
    },
    controlText: {
        color: 'white',
    },
    button: {
        backgroundColor: '#455A63',
        borderWidth: 1,
        borderColor: 'black',
        padding: 10,
    }
})