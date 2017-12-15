import { connect } from 'react-redux';
import React from 'react';
import FormRender from './InvestView';
import { Assets } from '@theme/';

const mapStateToProps = (state) => {
  return {
    session: state.session,
  }};

export default connect(mapStateToProps, null)(FormRender);
