/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render } from '@testing-library/react-native';
import ButtonComponent from './ButtonComponent';

describe('Contributors', () => {
  it('should render the Welcome Screen', () => {
    const tree = render(<ButtonComponent text="test" handleClick={() => {}} />);
    expect(tree).toMatchSnapshot();
  });
});
