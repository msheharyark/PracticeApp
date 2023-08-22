import React, {useState, useEffect} from 'react';
import {
  Keyboard,
  ScrollView,
  StyleSheet,
  Text,
  View as RNView,
  Button,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TaskInputField from './TaskInputField';
import TaskItem from './TaskItem';
import Icon from 'react-native-vector-icons/Ionicons';

const Todays_Task = ({navigation}) => {
  const [tasks, setTasks] = useState([]);

  const updateTaskText = (index, newText) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].text = newText;
    setTasks(updatedTasks);
    saveTasksToStorage(updatedTasks);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    try {
      const savedTasks = await AsyncStorage.getItem('tasks');
      if (savedTasks) {
        setTasks(JSON.parse(savedTasks));
      }
    } catch (error) {
      console.error('Error loading tasks:', error);
    }
  };

  const saveTasksToStorage = async updatedTasks => {
    try {
      await AsyncStorage.setItem('tasks', JSON.stringify(updatedTasks));
    } catch (error) {
      console.error('Error saving tasks:', error);
    }
  };

  const addTask = newTask => {
    if (newTask.trim() !== '') {
      const updatedTasks = [
        ...tasks,
        {id: Date.now().toString(), text: newTask},
      ];
      setTasks(updatedTasks);
      saveTasksToStorage(updatedTasks);
      Keyboard.dismiss();
    }
  };

  const deleteTask = deleteIndex => {
    const updatedTasks = tasks.filter((_, index) => index !== deleteIndex);
    setTasks(updatedTasks);
    saveTasksToStorage(updatedTasks);
  };

  return (
    <RNView style={styles.container}>
      <Icon
        name={'menu'}
        size={30}
        color="white"
        onPress={() => navigation.openDrawer()}
      />
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />

      <Text style={styles.heading}>Today's Task</Text>
      {/* ... rest of the code */}
      <ScrollView style={styles.scrollView}>
        {tasks.map((task, index) => (
          <RNView key={index} style={styles.taskContainer}>
            <TaskItem
              index={index + 1}
              task={task.text}
              deleteTask={() => deleteTask(index)}
              updateTaskText={updateTaskText} // Pass the function as a prop
            />
          </RNView>
        ))}
      </ScrollView>
      <TaskInputField addTask={addTask} />
    </RNView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#023b64',
  },
  heading: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
    marginTop: 30,
    marginBottom: 10,
    marginLeft: 20,
  },
  scrollView: {
    marginBottom: 70,
  },
  taskContainer: {
    marginTop: 20,
  },
});

export default Todays_Task;
