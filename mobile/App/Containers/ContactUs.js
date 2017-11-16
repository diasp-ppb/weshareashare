import React, { Component } from 'react'
import { View, Image } from 'react-native';
import { Images, ApplicationStyles } from '../Themes/index';
import { Button, Text, Divider } from 'react-native-elements';
import { connect } from 'react-redux'
import * as Session from '../Redux/Session';
import * as API from '../Services/API';
import Toast from 'react-native-root-toast';

const t = require('tcomb-form-native');
const Form = t.form.Form;
import * as Utils from '../Services/Utils';

const ContactUsParams = t.struct({
  firstName: t.String,
  lastName: t.String,
  email: Utils.Email,
  subject: t.String,
  message: t.String,
});
const defaultOptions = {
  auto: 'placeholders',
  fields: {
    email: {
      placeholder: 'Email',
      error: 'Insert a valid email',
      maxLength: 32,
    },
    firstName: {
      placeholder: 'First name',
    },
    lastName: {
      placeholder: 'Last name',
    },
    subject: {
      placeholder: 'Subject',
    },
    message: {
      message: 'Your message here...',
      multiline: true,
      stylesheet: {
          ...Form.stylesheet,
          textbox: {
            ...Form.stylesheet.textbox,
            normal: {
              ...Form.stylesheet.textbox.normal,
              height: 100
            },
            error: {
              ...Form.stylesheet.textbox.error,
              height: 100
          }
        }
      },
    },
  },
};

class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: {},
      options: defaultOptions,
      serverResponse: '',
    };
  }

  onChange = (value) => {
    this.setState({value});
  }

  onSubmit = () => {
    let values = this.refs.form.getValue();
   // this.setState({value: null});

    if (values) {
      console.log('ola');
      API.contactUs(values, this.state.session)
        .then((res) => {
          this.props.authUser(res);
        })
        .catch(err => {
          this.setState({serverResponse: err.response});
          Toast.show(this.state.serverResponse, ApplicationStyles.toast);

          this.props.onRequestFailed(err);
        });
    } 
  }

  render() {
    const { navigate } = this.props.navigation;    
    return (
      <View style={ApplicationStyles.mainContainer}>
        <View style={ApplicationStyles.form}>
          <Text h3 style={ApplicationStyles.subTitle}>Contact us</Text>
          <Text style={ApplicationStyles.subSubTitle}>Hello! Send us a message and we'll get back to you via email as soon as possible. 
          Your feedback is extremely important to us.</Text>

          <View style={ApplicationStyles.container}>
            <Form
              ref="form"
              type={ContactUsParams}
              options={this.state.options}
              value={this.state.value}
              onChange={this.onChange}/>
            <Button
              buttonStyle={ApplicationStyles.btn}
              onPress={this.onSubmit}
              underlayColor='#99d9f4'
              title='Submit' />
          </View>   

        </View>
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  authUser: (res) => dispatch(Session.authenticate(res)),
  onRequestFailed: (exception) => dispatch(Session.onRequestFailed(exception)),
})

export default connect(null, mapDispatchToProps)(ContactUs)
