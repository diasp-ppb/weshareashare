import React,{Component} from "react";
import {
    Text,
} from 'react-native'

import styles from '../Styles/HeadBarStyle';

export default  class MiddleComponent extends Component {


    constructor(props) {
        super(props);
    }

    render () {
        return(
            <Text style={styles.title}>{this.props.screenName}</Text>
        )
    }
}