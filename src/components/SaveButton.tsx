import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

type SaveButtonProps = {
  onPress: () => void;
};

const SaveButton = ({ onPress }: SaveButtonProps) => {
  return (
    <TouchableOpacity style={styles.saveButton} onPress={onPress}>
      <Text style={styles.saveButtonText}>Save</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  saveButton: {
    backgroundColor: '#3f51b5',
    padding: 10,
    borderRadius: 5,
    alignSelf: 'flex-end',
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default SaveButton;
