import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

type ConfirmButtonProps = {
  onPress: () => void;
  disabled: boolean;
};

const ConfirmButton = ({ onPress, disabled }: ConfirmButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.button, disabled && styles.buttonDisabled]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={styles.buttonText}>Confirm Flight Location</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#3f51b5',
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonDisabled: {
    backgroundColor: '#b0bec5',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default ConfirmButton;
