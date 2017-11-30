import React, {Component, PropTypes} from "react";
import {
    View,
    TouchableOpacity,
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from "./Styles/HeadBarStyle";



export default class RightComponent extends Component {

    NotificationIcon() {
        var symbol = "bell-off";
        if(this.props.currentState)
            symbol="bell";
        return symbol;
    }

    render () {
        const { navigate } = this.props.navigation;

        return(
            <View style={styles.sideByside}>
                <TouchableOpacity style={styles.pullLeft} onPress={()=> this.props.switchState}>
                    <Icon style= {styles.button} name={this.NotificationIcon()} size={30} color="#fff"/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigate("DrawerOpen")}>
                    <Icon style= {styles.button} name="menu" size={30} color="#fff"/>
                </TouchableOpacity>
            </View>
        )
    }


}