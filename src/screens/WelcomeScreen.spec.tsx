/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render } from '@testing-library/react-native';
import WelcomeScreen from './WelcomeScreen';

describe('Contributors', () => {
  it('should render the Welcome Screen', () => {
    const tree = render(<WelcomeScreen navigation={{ navigate: jest.fn() }} />);
    expect(tree).toMatchSnapshot();
  });
});
