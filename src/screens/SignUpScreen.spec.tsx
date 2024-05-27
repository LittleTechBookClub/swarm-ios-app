/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render } from '@testing-library/react-native';
import SignUpScreen from './SignUpScreen';

describe('SignUpScreen', () => {
  it('should render the SignUp Screen', () => {
    const tree = render(<SignUpScreen />);
    expect(tree).toMatchSnapshot();
  });
});
