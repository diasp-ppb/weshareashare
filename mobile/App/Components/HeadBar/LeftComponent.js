import React, {Component, PropTypes} from "react";
import {
    TouchableOpacity,
    View,
    Text,
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux';
import styles from '../Styles/HeadBarStyle';

export default  class LeftComponent extends Component {

    constructor(props) {
        super(props);
    }

    render () {
        const { navigate } = this.props.navigation;
        return(
            <View style={styles.sideByside}>
            <TouchableOpacity style={[styles.leftComponent,styles.sideByside]} onPress={()=> navigate(this.props.backScreen)} >
                <Icon style={styles.button} name="arrow-left" size={30} color="#fff"/>
                <Text style={styles.textBack}>Back</Text>
            </TouchableOpacity>
            </View>
        )
    }
}