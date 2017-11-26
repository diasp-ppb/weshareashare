import React, {Component, PropTypes} from "react";
import {
    TouchableOpacity,
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux'
import styles from '../Styles/HeadBarStyle';

export default  class LeftComponent extends Component {

    constructor(props) {
        super(props);
    }

    render () {
        const { navigate } = this.props.navigation;
        return(
            <TouchableOpacity  onPress={()=> navigate('ForgotPassword')} >
                <Icon style= {styles.button} name="arrow-left" size={30} color="#fff"/>
            </TouchableOpacity>
        )
    }
}