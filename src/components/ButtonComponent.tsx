import React from 'react';
import { useFonts } from 'expo-font';
import { Text, StyleSheet, Pressable } from 'react-native';

type Props = {
  text: string;
  handleClick: () => void;
  testID?: string;
};

const ButtonComponent: React.FC<Props> = ({ text, handleClick, testID }: Props) => {
  useFonts({
    'Roboto-Medium': require('../../assets/fonts/Roboto/Roboto-Medium.ttf'),
  });

  return (
    <Pressable
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? '#FFFFFF' : '#0D2818',
          color: pressed ? '#000000' : '#FFFFFF',
          borderColor: pressed ? '#1A3930' : '#0D2818',
        },
        styles.buttonContainer,
      ]}
      onPress={handleClick}
      testID={testID}
    >
      {text}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    height: 56,
    borderRadius: 8,
    paddingVertical: 16,
    paddingHorizontal: 40,
    borderWidth: 1,
    fontFamily: 'Roboto-Medium',
    fontSize: 16,
    textAlign: 'center',
  },
});
export default ButtonComponent;
