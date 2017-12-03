/**
 * Test to check if the component renders correctly
 */
/* global it expect */
import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import CustomFormValidationMessage from '@ui/FormValidationMessage';

it('Alerts (empty) renders correctly', () => {
  const tree = renderer.create(
    <CustomFormValidationMessage />,
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it('Alerts (Sucess) renders correctly', () => {
  const tree = renderer.create(
    <CustomFormValidationMessage success={'Hello Success'} />,
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it('Alerts (Error) renders correctly', () => {
  const tree = renderer.create(
    <CustomFormValidationMessage error={'Error hey'} />,
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it('Alerts (Status) renders correctly', () => {
  const tree = renderer.create(
    <CustomFormValidationMessage status={'Something\'s happening...'} />,
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
