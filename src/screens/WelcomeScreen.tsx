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
          uri: 'https://s3-alpha-sig.figma.com/img/ceba/f0c9/1d52df65bfda2146d8a56199f05e993c?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PbvjzmBR0H1OEIP7kYo8OhAQSI9RAQh9XaiXD5-6PQFNEONVvgAT7j2FZoDX5LV-Ni0jhpLQe2Fb1Igm0Trz5uPsPNcFVpj3C4JvWF3sGYOVuWvHD50bsJt8EwMAugCSWSiWLiW4WXyRuSO7jvgePgeBHytcafC1byPQqRLxIUiAUpOjyqPq1yJhk1Ax6qzKrs9G5zLY11bY2MsevVSvI5tIWrHhMSsz2W2kP61elVfkbmuMHAQTaHMHUvCtWjxifMdcJiTIblt~356FjxQKgSSsuuWsNHOiA49Q2yFf~HgLQ-f1XQ8F4kX5p7lI3UiiFE6nk6jP15iZqfHk8pMWPw__',
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
