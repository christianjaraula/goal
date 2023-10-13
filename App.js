import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Modal } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import NightlightIcon from '@mui/icons-material/Nightlight';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);
  const [isWelcomeModalVisible, setWelcomeModalVisible] = useState(false);
  const [warningShown, setWarningShown] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const toggleWelcomeModal = () => {
    setWelcomeModalVisible(!isWelcomeModalVisible);
  };

  function addGoalHandler(enteredGoalText) {
    if (courseGoals.length >= 5 && !warningShown) {
      toggleModal();
      setWarningShown(true);
    } else {
      setCourseGoals((currentCourseGoals) => [
        ...currentCourseGoals,
        { text: enteredGoalText, key: Math.random().toString() },
      ]);
    }
  }

  function deleteGoalHandler(goalKey) {
    setCourseGoals((currentCourseGoals) =>
      currentCourseGoals.filter((goal) => goal.key !== goalKey)
    );
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.titleContainer}>
        <TouchableOpacity onPress={toggleWelcomeModal}>
          <NightlightIcon style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.titleText}>Hello, Team AINC</Text>
      </View>

      <GoalInput onAddGoal={addGoalHandler} />
      <FlatList
        style={styles.goalContainer}
        data={courseGoals}
        ListHeaderComponent={
          <Text style={styles.goalTitle}>Your Course Goal</Text>
        }
        renderItem={({ item }) => (
          <GoalItem text={item.text} onDelete={() => deleteGoalHandler(item.key)} />
        )}
        keyExtractor={(item) => item.key}
      />

      <Modal transparent={true} animationType="slide" visible={isModalVisible}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>
              Be mindful of overwhelming yourself with too much burden.
            </Text>
            <TouchableOpacity onPress={() => toggleModal()}>
              <Text style={styles.closeModalButton}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Modal transparent={true} animationType="slide" visible={isWelcomeModalVisible}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Welcome to the application!</Text>
            <TouchableOpacity onPress={() => toggleWelcomeModal()}>
              <Text style={styles.closeModalButton}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 5,
    paddingHorizontal: 16,
    backgroundColor: '#010827',
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  titleText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 40,
    fontVariant: 'small-caps',
  },

  goalContainer: {
    flex: 10,
    padding: 10,
    borderColor: '#031b4f',
    backgroundColor: '#02123c',
    borderStyle: 'groove',
    borderBottomWidth: 7,
    borderRightWidth: 7,
    borderLeftWidth: 7,
    borderTopWidth: 7,
    borderRadius: 5,
    marginBottom: 10,
    maxHeight: '85%',
  },
  goalTitle: {
    color: 'white',
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    fontVariant: 'small-caps',
    borderStyle: 'solid',
    borderBottomWidth: 5,
    borderRightWidth: 5,
    borderLeftWidth: 5,
    borderTopWidth: 5,
    borderRadius: 5,
    borderColor: '#031b4f',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    marginLeft: 10,
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  modalText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  closeModalButton: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
  icon: {
    color: 'yellow',
  }
});
