import React, { useState } from 'react';
import InputField from '../components/InputField';

const SignUpScreen = () => {
  const [email, setEmail] = useState<string>('');

  const handleSubmit = (text: string) => {
    setEmail('');
  };

  return (
    <InputField
      label="Email"
      placeholder="jane@example.com"
      isPassword={false}
      isEmail={true}
      onChange={setEmail}
      onSubmitEditing={handleSubmit}
      value={email}
    />
  );
};

export default SignUpScreen;
