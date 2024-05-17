import React from 'react';
import { useFonts } from 'expo-font';
import ButtonComponent from '../components/ButtonComponent';
import { View, StyleSheet, Image, Text } from 'react-native';

const WelcomeScreen = ({ navigation }: { navigation: any }) => {
  const [fontsLoaded] = useFonts({
    'Roboto-Medium': require('../../assets/fonts/Roboto/Roboto-Medium.ttf'),
    'Roboto-Regular': require('../../assets/fonts/Roboto/Roboto-Regular.ttf'),
    'NotoSerif-Bold': require('../../assets/fonts/NotoSerif/NotoSerif-Bold.ttf'),
    'Inter-Regular': require('../../assets/fonts/Inter/Inter-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  function handleLogin(): void {
    navigation.navigate('LoginScreen');
  }

  function handleSignUp(): void {
    navigation.navigate('SignUpScreen');
  }

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: '../../assets/beeSmartHome.png',
        }}
        style={{ width: 500, height: 400 }}
      />
      <View style={styles.introduction}>
        <Text style={styles.welcomeText}>Welcome to</Text>
        <Text style={styles.appTitle}>BeeSmart</Text>
        <Text style={styles.description}>
          A place to track your hive data and explore beekeeping tools
        </Text>
      </View>
      <Text style={styles.getStarted}>Let's get started</Text>
      <ButtonComponent text="Login" handleClick={handleLogin} />
      <ButtonComponent text="Sign Up" handleClick={handleSignUp} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    gap: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  introduction: {
    paddingVertical: 10,
    width: '100%',
    textAlign: 'left',
  },
  welcomeText: {
    fontFamily: 'Roboto-Medium',
    fontSize: 24,
    lineHeight: 28.13,
    textAlign: 'left',
    width: '75%',
  },
  appTitle: {
    fontFamily: 'NotoSerif-Bold',
    color: '#3F2212',
    fontSize: 48,
    width: '75%',
    textAlign: 'left',
  },
  description: {
    display: 'flex',
    fontFamily: 'Roboto-Regular',
    fontSize: 18,
    width: '75%',
    flexWrap: 'wrap',
    lineHeight: 24,
  },
  getStarted: {
    fontFamily: 'Inter-Regular',
    fontSize: 18,
    width: '100%',
    textAlign: 'left',
    paddingVertical: 10,
  },
});

export default WelcomeScreen;
