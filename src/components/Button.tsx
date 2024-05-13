import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

type Props = {
  text: string;
};

const Button: React.FC<Props> = ({ text }: Props) => {
  return (
    <TouchableOpacity style={styles.buttonContainer}>
      <View style={{ flex: 1 }}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    height: 56,
    borderRadius: 8,
    paddingVertical: 16,
    paddingHorizontal: 40,
  },
  buttonText: {
    color: '#FFFFFF',
    fontFamily: 'Roboto Regular',
    fontSize: 16,
    textAlign: 'center',
  },
});
export default Button;
