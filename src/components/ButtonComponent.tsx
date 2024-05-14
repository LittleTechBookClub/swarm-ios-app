import React from 'react';
import { useFonts } from 'expo-font';
import { Text, StyleSheet, Pressable } from 'react-native';

type Props = {
  text: string;
  handleClick: () => void;
};

const ButtonComponent: React.FC<Props> = ({ text, handleClick }: Props) => {
  const [fontsLoaded] = useFonts({
    'Roboto-Medium': require('../../assets/fonts/Roboto/Roboto-Medium.ttf'),
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <Pressable
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? '#FFFFFF' : '#000000',
          color: pressed ? '#000000' : '#FFFFFF',
        },
        styles.buttonContainer,
      ]}
      onPress={handleClick}
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
    borderColor: '#000000',
    borderWidth: 1,
    fontFamily: 'Roboto-Medium',
    fontSize: 16,
    textAlign: 'center',
  },
});
export default ButtonComponent;
