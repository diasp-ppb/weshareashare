import { connect } from 'react-redux';
import React from 'react';
import FormRender from './CausesView';
import { Assets } from '@theme/';

const mapStateToProps = (state, ownProps) => {
  let navigationParams = ownProps.navigation.state.params;
  let informative = navigationParams ? navigationParams.informative : true;
  return {
    session: state.session,
    informative: informative,
}};

export default connect(mapStateToProps, null)(FormRender);
