import React from 'react';
import { useFonts } from 'expo-font';
import { Text, StyleSheet, Pressable, TextInput, View } from 'react-native';

type Props = {
  label: string;
  isPassword: boolean;
  onChange: (text: string) => void;
};

const InputField: React.FC<Props> = ({ label, isPassword, onChange }: Props) => {
  const [fontsLoaded] = useFonts({
    'Roboto-Medium': require('../../assets/fonts/Roboto/Roboto-Medium.ttf'),
    'Roboto-Regular': require('../../assets/fonts/Roboto/Roboto-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={{ width: '100%' }}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.inputField} secureTextEntry={isPassword} onChangeText={onChange} />
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
});
export default InputField;
