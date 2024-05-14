/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render } from '@testing-library/react-native';
import SignUpScreen from './SignUpScreen';

describe('Contributors', () => {
  it('should render the Welcome Screen', () => {
    const tree = render(<SignUpScreen />);
    expect(tree).toMatchSnapshot();
  });
});
