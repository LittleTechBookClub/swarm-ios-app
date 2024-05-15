/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render } from '@testing-library/react-native';
import ButtonComponent from './ButtonComponent';

describe('ButtonComponent', () => {
  it('should render the Button Component', () => {
    const tree = render(<ButtonComponent text="test" handleClick={() => {}} />);
    expect(tree).toMatchSnapshot();
  });
});
