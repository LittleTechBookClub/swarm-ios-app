import React, { useState, useEffect } from 'react';
import { useFonts } from 'expo-font';
import { Text, StyleSheet, TextInput, View } from 'react-native';

type Props = {
  label: string;
  placeholder: string;
  isPassword: boolean;
  isEmail: boolean;
  onChange: (text: string) => void;
  onSubmitEditing: (text: string) => void;
  validation?: (text: string) => string | null;
  value: string;
};

const InputField: React.FC<Props> = ({
  label,
  placeholder,
  isPassword,
  isEmail,
  onChange,
  onSubmitEditing,
  validation,
  value,
}: Props) => {
  const [localValue, setLocalValue] = useState<string>(value);
  const [error, setError] = useState<string | null>(null);

  const [fontsLoaded] = useFonts({
    'Roboto-Medium': require('../../assets/fonts/Roboto/Roboto-Medium.ttf'),
    'Roboto-Regular': require('../../assets/fonts/Roboto/Roboto-Regular.ttf'),
  });

  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  if (!fontsLoaded) {
    return null;
  }

  //logic to sanitize and process input strings before storing
  const sanitizeText = (text: string): string => {
    let sanitizedText = text.trim();

    if (isEmail) {
      sanitizedText = sanitizedText.toLowerCase();
    }
    sanitizedText = sanitizedText.replace(/[\\"']/g, '\\$&').replace(/\u0000/g, '\\0');

    return sanitizedText;
  };

  //email validation using regex
  const emailValidation = (email: string): boolean => {
    const emailRegex =
      /^(([^<>()\[\]\.,;:\s@"]+(\.[^<>()\[\]\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(email);
  };

  const handleChange = (text: string) => {
    const sanitizedText = sanitizeText(text);
    setLocalValue(sanitizedText);
    onChange(sanitizedText);

    if (error) {
      setError(null);
    }
  };

  //handle onSubmit and returns error if valid input not entered
  const handleSubmit = () => {
    if (isEmail && !emailValidation(localValue)) {
      setError('Please enter a valid email address.');
    } else if (validation) {
      const validationError = validation(localValue);
      setError(validationError);
    } else {
      setError(null);
      onChange(localValue);
      onSubmitEditing(localValue);
    }
    setLocalValue('');
  };

  return (
    <View style={{ width: '100%' }}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={[styles.inputField, error ? styles.inputError : null]}
        placeholder={placeholder}
        secureTextEntry={isPassword}
        onChangeText={handleChange}
        onSubmitEditing={handleSubmit}
        value={localValue}
      />
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontFamily: 'Roboto-Medium',
    fontSize: 16,
    color: '#344054',
    paddingBottom: 10,
    width: '100%',
    textAlign: 'left',
  },
  inputField: {
    width: '100%',
    height: 40,
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderWidth: 1,
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    textAlign: 'left',
    borderColor: '#D0D5DD',
    color: '#344054',
  },
  inputError: {
    borderColor: '#FF0000',
  },
  errorText: {
    color: '#FF0000',
    fontSize: 12,
    marginTop: 5,
    fontFamily: 'Roboto-Regular',
  },
});
export default InputField;
