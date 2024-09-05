/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import InputField from './InputField';

//to account for fontsLoaded state
jest.mock('expo-font', () => ({
  useFonts: () => [true],
}));

describe('InputField', () => {
  it('should render the Input Field with given label', () => {
    const { getByText } = render(
      <InputField
        label="test"
        placeholder="Enter text"
        isPassword={false}
        isEmail={false}
        onChange={() => {}}
        onSubmitEditing={() => {}}
        value=""
      />
    );
    expect(getByText('test')).toBeTruthy();
  });

  it('should handle input changes correctly', () => {
    const mockOnChange = jest.fn();
    const { getByPlaceholderText } = render(
      <InputField
        label="test label"
        placeholder="enter text"
        isPassword={false}
        isEmail={false}
        onChange={mockOnChange}
        onSubmitEditing={() => {}}
        value=""
      />
    );

    const input = getByPlaceholderText('enter text');
    fireEvent.changeText(input, 'New text');
    expect(mockOnChange).toHaveBeenCalledWith('New text');
  });

  it('should displace an error message for invalid email', () => {
    const { getByPlaceholderText, findByText } = render(
      //using findByText adds a small delay to wait for the error message
      <InputField
        label="email"
        placeholder="enter email"
        isPassword={false}
        isEmail={true}
        onChange={() => {}}
        onSubmitEditing={() => {}}
        value=""
      />
    );
    const input = getByPlaceholderText('enter email');
    fireEvent.changeText(input, 'invalid-email');
    fireEvent(input, 'submitEditing');
    expect(findByText('Invalid email address')).toBeTruthy();
  });

  it('should call onSubmitEditing with transformed value and clear input', () => {
    const mockOnSubmitEditing = jest.fn();
    const { getByPlaceholderText } = render(
      <InputField
        label="test label"
        placeholder="enter text"
        isPassword={false}
        isEmail={false}
        onChange={() => {}}
        onSubmitEditing={mockOnSubmitEditing}
        value="test"
      />
    );

    const input = getByPlaceholderText('enter text');
    fireEvent.changeText(input, 'new text');
    fireEvent(input, 'submitEditing');
    expect(mockOnSubmitEditing).toHaveBeenCalledWith('new text'); // Check if the input is cleared
    expect(input.props.value).toBe('');
  });

  it('should update the input value when prop changes', () => {
    const { getByPlaceholderText, rerender } = render(
      <InputField
        label="Test Label"
        placeholder="enter text"
        isPassword={false}
        isEmail={false}
        onChange={() => {}}
        onSubmitEditing={() => {}}
        value="initial"
      />
    );

    let input = getByPlaceholderText('enter text');
    expect(input.props.value).toBe('initial');

    rerender(
      <InputField
        label="Test Label"
        placeholder="enter text"
        isPassword={false}
        isEmail={false}
        onChange={() => {}}
        onSubmitEditing={() => {}}
        value="updated"
      />
    );

    input = getByPlaceholderText('enter text');
    expect(input.props.value).toBe('updated');
  });
});
