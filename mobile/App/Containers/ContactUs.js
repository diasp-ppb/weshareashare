import React, { Component } from 'react';
import { View } from 'react-native';
import Toast from 'react-native-root-toast';
import { Button, Text } from 'react-native-elements';
import { connect } from 'react-redux';
import { ApplicationStyles } from '../Themes/index';
import * as API from '../Services/API';

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
      maxLength: 32,
      error: 'Insert your first name',
    },
    lastName: {
      placeholder: 'Last name',
      maxLength: 32,
      error: 'Insert your last name',
    },
    subject: {
      placeholder: 'Subject',
      maxLength: 64,
      error: 'Insert the message subject',
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
            height: 100,
          },
          error: {
            ...Form.stylesheet.textbox.error,
            height: 100,
          },
        },
      },
    },
  },
};

class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      session: props.session.session,
      value: {},
      options: defaultOptions,
      serverResponse: '',
    };
  }

  onChange = (value) => {
    this.setState({ value });
  }

  onSubmit = () => {
    const values = this.refs.form.getValue();

    if (values) {
      API.contactUs(values, this.state.session)
        .then(() => {
          Toast.show('Your message has been received. Thank you very much!', ApplicationStyles.toastSuccess);
          this.setState({ value: null, serverResponse: '' });
        })
        .catch((err) => {
          this.setState({ serverResponse: err.response });
          Toast.show(this.state.serverResponse, ApplicationStyles.toastError);
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
              onChange={this.onChange}
            />
            <Button
              buttonStyle={ApplicationStyles.btn}
              onPress={this.onSubmit}
              underlayColor="#99d9f4"
              title="Submit"
            />
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return { session: state };
};

export default connect(mapStateToProps, null)(ContactUs);
