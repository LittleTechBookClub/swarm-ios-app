import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import PasswordChanged from './PasswordChanged';
import strings from '../Strings';
import successSticker from '../../assets/successSticker.png';

//create mock navigation
const mockNavigate = jest.fn();
const mockNav = { navigate: mockNavigate };

describe('PasswordChanged Screen', () => {
  it('renders correctly', () => {
    const { getByText, getByTestId } = render(<PasswordChanged navigation={mockNav as any} />);

    //verify text, button, and successSticker render
    expect(getByText(strings.passwordChanged.title)).toBeTruthy();
    expect(getByText(strings.passwordChanged.subtitle)).toBeTruthy();
    expect(getByTestId('success-sticker')).toBeTruthy();
    expect(getByTestId('back-to-login-button')).toBeTruthy();
  });

  it('navigates to LoginScreen on button press', () => {
    const { getByTestId } = render(<PasswordChanged navigation={mockNav as any} />);

    //click back to login button and ensure the Login screen gets called
    fireEvent.press(getByTestId('back-to-login-button'));
    expect(mockNavigate).toHaveBeenCalledWith('LoginScreen');
  });
});
