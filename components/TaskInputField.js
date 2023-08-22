/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */

import React, {useState} from 'react';
import {
  KeyboardAvoidingView,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TaskInputField = ({addTask}) => {
  const [task, setTask] = useState('');

  const handleAddTask = () => {
    if (task.trim() !== '') {
      addTask(task); // Notify the parent component to add the task
      saveTaskToStorage(task); // Save the task to AsyncStorage
      setTask(''); // Clear the input field
    }
  };

  const saveTaskToStorage = async newTask => {
    try {
      const existingTasks = await AsyncStorage.getItem('tasks');
      const parsedTasks = existingTasks ? JSON.parse(existingTasks) : [];
      const updatedTasks = [...parsedTasks, newTask];
      await AsyncStorage.setItem('tasks', JSON.stringify(updatedTasks));
    } catch (error) {
      console.error('Error saving task:', error);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <TextInput
        style={styles.inputField}
        value={task}
        onChangeText={text => setTask(text)}
        placeholder={'Write a task'}
        placeholderTextColor={'#000000'}
      />
      <TouchableOpacity onPress={handleAddTask}>
        <View style={styles.button}>
          <Icon name="plus" size={20} color="white" />
        </View>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: '#fff',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    marginHorizontal: 20,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    position: 'absolute',
    bottom: 20,
  },
  inputField: {
    color: '#000000',
    height: 50,
    flex: 1,
  },
  button: {
    height: 50,
    width: 50,
    borderRadius: 100,
    backgroundColor: '#FF0000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default TaskInputField;
