import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const DeleteButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Delete All Goals</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 2,
    borderRadius: 5,
    maxWidth: '30%',
    alignSelf: 'center', // Center horizontally within the parent
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center', // Center the text horizontally within the button
  },
});

export default DeleteButton;
