import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const GoalInput = (props) => {
  const [enteredGoalText, setEnteredGoalText] = useState('');

  function textInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText(''); // Clear the input field
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        onChangeText={textInputHandler}
        value={enteredGoalText} // Ensure the 'value' prop is correctly set
      />
      <Button color='#02123c' title='Add Goal' onPress={addGoalHandler} /> 
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 24,
    borderColor: '#02123c',
  },
  textInput: {
    borderWidth: 2,
    borderColor: '#02123c',
    marginRight: 10,
    padding: 5,
    width: '80%',
    color: 'grey',
    borderRadius: 4,
    backgroundColor: 'white',
  },
});

export default GoalInput;
