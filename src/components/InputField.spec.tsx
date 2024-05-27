/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render } from '@testing-library/react-native';
import InputField from './InputField';

describe('InputField', () => {
  it('should render the Input Field', () => {
    const tree = render(<InputField label="test" isPassword={false} onChange={() => {}} />);
    expect(tree).toMatchSnapshot();
  });
});
