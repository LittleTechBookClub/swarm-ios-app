import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import React from 'react';
import InputField from '../components/InputField';
import { useFonts } from 'expo-font';
import { SafeAreaView } from 'react-native-safe-area-context';
import ButtonComponent from '../components/ButtonComponent';
import ThirdPartyButton from '../components/ThirdPartyButton';

const SignUpScreen = () => {
  const [fullName, setFullName] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  useFonts({
    'NotoSerif-Bold': require('../../assets/fonts/NotoSerif/NotoSerif-Bold.ttf'),
    'Inter-Medium': require('../../assets/fonts/Inter/Inter-Medium.ttf'),
    'Inter-Regular': require('../../assets/fonts/Inter/Inter-Regular.ttf'),
  });

  const handleSubmit = () => {
    console.log(fullName, username, email, password);
    // TODO: Add logic to sign up
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <InputField
        label="First & Last Name"
        isPassword={false}
        onChange={(text) => setFullName(text)}
      />
      <InputField label="Username" isPassword={false} onChange={(text) => setUsername(text)} />
      <InputField label="Email" isPassword={false} onChange={(text) => setEmail(text)} />
      <InputField label="Password" isPassword={true} onChange={(text) => setPassword(text)} />
      <View style={styles.button}>
        <ButtonComponent text="Sign Up" handleClick={handleSubmit} />
      </View>
      <View style={styles.division}>
        <View style={styles.divisionLine} />
        <View>
          <Text style={styles.divisionText}> Or register with </Text>
        </View>
        <View style={styles.divisionLine} />
      </View>
      <View style={styles.thirdPartyButtonContainer}>
        <ThirdPartyButton
          imgSrc="../../assets/facebook-icon.svg"
          handleClick={() => {}}
          width={15}
          height={28}
        />
        <ThirdPartyButton
          imgSrc="../../assets/google-icon.svg"
          handleClick={() => {}}
          width={24}
          height={24}
        />
        <ThirdPartyButton
          imgSrc="../../assets/apple.svg"
          handleClick={() => {}}
          width={24}
          height={24}
        />
      </View>
      <View style={styles.loginContainer}>
        <Text style={styles.alreadyHaveAccount}>
          Already have an account?
          <TouchableOpacity>
            <Text style={styles.login}>Login</Text>
          </TouchableOpacity>
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    gap: 30,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    width: '100%',
  },
  title: {
    fontFamily: 'NotoSerif-Bold',
    color: '#3F2212',
    fontSize: 40,
    fontWeight: '700',
    width: '100%',
    textAlign: 'left',
  },
  button: { width: '100%', paddingVertical: 20 },
  division: { flexDirection: 'row', alignItems: 'center', width: '100%' },
  divisionLine: { flex: 1, backgroundColor: '#E8ECF4', height: 1 },
  divisionText: {
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    paddingHorizontal: 10,
    textAlign: 'center',
    color: '#6A707C',
  },
  thirdPartyButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  loginContainer: { width: '100%', alignItems: 'center' },
  alreadyHaveAccount: { fontFamily: 'Inter-Regular', fontSize: 16 },
  login: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: '#769676',
    paddingHorizontal: 5,
  },
});

export default SignUpScreen;
