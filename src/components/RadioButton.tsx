import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

type RadioButtonProps = {
  label: string;
  selected: boolean;
  onPress: () => void;
};

const RadioButton = ({ label, selected, onPress }: RadioButtonProps) => {
  return (
    <TouchableOpacity style={styles.radioButton} onPress={onPress}>
      <Text style={styles.radioButtonText}>
        {selected ? '🔘' : '⚪'} {label}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  radioButton: {
    marginRight: 20,
  },
  radioButtonText: {
    fontSize: 16,
  },
});

export default RadioButton;
