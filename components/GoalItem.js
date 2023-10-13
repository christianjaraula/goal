import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal } from 'react-native';

interface GoalItemProps {
  text: string;
  onDelete: () => void;
}

const GoalItem: React.FC<GoalItemProps> = ({ text, onDelete }) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{text}</Text>
      <TouchableOpacity onPress={toggleModal}>
        <Text style={styles.goalDeleteButton}>x</Text>
      </TouchableOpacity>

      <Modal transparent={true} animationType="slide" visible={isModalVisible}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Are you sure you want to delete this item?</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={onDelete}>
                <Text style={styles.modalDeleteButton}>Delete</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={toggleModal}>
                <Text style={styles.modalCancelButton}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#193170',
    borderColor: '#031b4f',
    borderWidth: 2,
    borderRadius: 5,
    borderStyle: 'dashed',
    borderBottomWidth: 4,
    borderRightWidth: 4,
    borderLeftWidth: 4,
    borderTopWidth: 4,
    borderRadius: 5,
  },
  goalDeleteButton: {
    color: 'red',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  goalText: {
    color: 'white',
    fontVariant: 'small-caps',
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  modalDeleteButton: {
    color: 'red',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalCancelButton: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default GoalItem;
