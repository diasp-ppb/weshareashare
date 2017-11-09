import React, { Component, PropTypes } from 'react';
import {
    View,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
} from 'react-native'

import Icon from 'react-native-vector-icons';




export default class ControlPanel extends Component {
    static contextTypes = {
        drawer: PropTypes.object.isRequired,
    };

    render() {
        return (
            <ScrollView style={styles.container}>
                <Text style={styles.controlText}>WeShareAShare</Text>
                <View>
                    <Text> User Name </Text>
                    <Text> email.exemplo@stoik.com </Text>
                </View>
                <View>
                    <TouchableOpacity style={styles.button} onPress={this.context.drawer.close}>
                        <Text>Notification</Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <Text style={styles.controlText}>Save</Text>
                    <TouchableOpacity style={styles.button} onPress={this.context.drawer.close}>
                        <Text>Simulation</Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <Text style={styles.controlText}>Invest</Text>
                    <TouchableOpacity style={styles.button} onPress={this.context.drawer.close}>
                        <Text>Portfolio</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={this.context.drawer.close}>
                        <Text>Profitability</Text>
                    </TouchableOpacity>
                </View>


                    <Text style={styles.controlText}>Share</Text>
                    <TouchableOpacity style={styles.button} onPress={this.context.drawer.close}>
                        <Text>WeShareAShare</Text>
                    </TouchableOpacity>



                    <Text style={styles.controlText}>More</Text>
                    <TouchableOpacity style={styles.button} onPress={this.context.drawer.close}>
                        <Text>FAQ</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={this.context.drawer.close}>
                        <Icon name="email" size={30} color="#900" />
                        <Text>Contact us</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={this.context.drawer.close}>

                        <Text>About us</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={this.context.drawer.close}>
                    
                        <Text>Logout</Text>
                    </TouchableOpacity>

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
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'black',
        padding: 10,
    }
})