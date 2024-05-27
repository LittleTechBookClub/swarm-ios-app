import React from 'react';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';

type Props = {
  imgSrc: string;
  handleClick: () => void;
  width: number;
  height: number;
};

const ThirdPartyButton: React.FC<Props> = ({ imgSrc, handleClick, width, height }: Props) => {
  return (
    <TouchableOpacity onPress={handleClick} style={styles.buttonContainer}>
      <Image source={{ uri: imgSrc }} style={{ width: width, height: height }} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: '30%',
    height: 56,
    borderRadius: 8,
    borderColor: '#E8ECF4',
    paddingVertical: 16,
    paddingHorizontal: 40,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
});
export default ThirdPartyButton;
