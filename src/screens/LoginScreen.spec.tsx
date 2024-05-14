/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render } from '@testing-library/react-native';
import LoginScreen from './LoginScreen';

describe('Contributors', () => {
  it('should render the Welcome Screen', () => {
    const tree = render(<LoginScreen />);
    expect(tree).toMatchSnapshot();
  });
});
