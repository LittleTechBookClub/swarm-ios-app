/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render } from '@testing-library/react-native';
import SignUpScreen from './SignUpScreen';

describe('SignUpScreen', () => {
  it('should render the Sign Up Screen', () => {
    const tree = render(<SignUpScreen />);
    expect(tree).toMatchSnapshot();
  });
});
