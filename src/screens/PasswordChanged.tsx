import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import Button from '../components/ButtonComponent';
import successSticker from '../../assets/successSticker.png';
import strings from '../Strings';

const PasswordChanged = ({}) => {
  useFonts({
    'Roboto-Bold': require('../../assets/fonts/Roboto/Roboto-Bold.ttf'),
    'Roboto-Regular': require('../../assets/fonts/Roboto/Roboto-Regular.ttf'),
  });
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Image source={successSticker} />
        <Text style={styles.title}>{strings.passwordChanged.title}</Text>
        <Text style={styles.subtitle}>{strings.passwordChanged.subtitle}</Text>
      </View>
      <Button
        text={strings.passwordChanged.button}
        handleClick={() => console.log('password changed!')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: '24px',
    backgroundColor: 'FFFFFF',
  },
  body: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: '64px',
    marginBottom: '32px',
  },
  title: {
    marginTop: '32px',
    marginBottom: '10px',
    fontFamily: 'Roboto-Bold',
    fontWeight: 700,
    fontSize: '26px',
  },
  subtitle: {
    fontFamily: 'Roboto-Regular',
    fontWeight: 500,
    color: '#8391A1',
    paddingHorizontal: '60px',
    textAlign: 'center',
  },
});

export default PasswordChanged;
