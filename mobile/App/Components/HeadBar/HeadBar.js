
import { Header } from 'react-native-elements';
import React,{Component} from "react";
import LeftComponent from "./LeftComponent";
import RightComponent from "./RightComponent";
import MiddleComponent from "./MiddleComponent";

export default  class HeadBar extends Component {

    constructor(props) {
        super(props);
    }

 render () {
     return(
       <Header
         leftComponent={<LeftComponent navigation={this.props.navigation} />}
         centerComponent={<MiddleComponent/>}
         rightComponent={<RightComponent/>}
         outerContainerStyles={{ backgroundColor: '#455A64' }}
       />
   )
 }
}
