import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import Button from '../components/ButtonComponent';
import successSticker from '../../assets/successSticker.png';
import strings from '../Strings';

const PasswordChanged = ({ navigation }: { navigation: any }) => {
  useFonts({
    'Roboto-Bold': require('../../assets/fonts/Roboto/Roboto-Bold.ttf'),
    'Roboto-Regular': require('../../assets/fonts/Roboto/Roboto-Regular.ttf'),
  });

  function handleBackToLogin() {
    navigation.navigate('LoginScreen');
  }

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Image source={successSticker} testID="success-sticker" />
        <Text style={styles.title}>{strings.passwordChanged.title}</Text>
        <Text style={styles.subtitle}>{strings.passwordChanged.subtitle}</Text>
        <Button
          text={strings.passwordChanged.button}
          handleClick={handleBackToLogin}
          testID="back-to-login-button"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    height: '100%',
  },
  body: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 24,
    marginBottom: 32,
    marginHorizontal: 24,
  },
  title: {
    marginTop: 32,
    marginBottom: 10,
    fontFamily: 'Roboto-Bold',
    fontWeight: '700',
    fontSize: 26,
  },
  subtitle: {
    fontFamily: 'Roboto-Regular',
    fontSize: 15,
    fontWeight: '500',
    color: '#8391A1',
    paddingHorizontal: 60,
    textAlign: 'center',
    marginBottom: 24,
  },
});

export default PasswordChanged;
