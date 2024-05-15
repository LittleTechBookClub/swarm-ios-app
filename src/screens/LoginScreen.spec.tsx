/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render } from '@testing-library/react-native';
import LoginScreen from './LoginScreen';

describe('LoginScreen', () => {
  it('should render the Login Screen', () => {
    const tree = render(<LoginScreen />);
    expect(tree).toMatchSnapshot();
  });
});
