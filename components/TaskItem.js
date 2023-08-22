/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const TaskItem = props => {
  const [editing, setEditing] = useState(false);
  const [updatedTaskText, setUpdatedTaskText] = useState(props.task);

  const handleEdit = () => {
    setEditing(true);
    console.log('called');
  };

  const handleSave = () => {
    props.updateTaskText(props.index - 1, updatedTaskText);
    setEditing(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.indexContainer}>
        <Text style={styles.index}>{props.index}</Text>
      </View>
      <View style={styles.taskContainer}>
        {editing ? (
          <TextInput
            style={styles.editInput}
            value={updatedTaskText}
            onChangeText={text => setUpdatedTaskText(text)}
          />
        ) : (
          <Text style={styles.task}>{props.task}</Text>
        )}
      </View>
      <View style={styles.editTrashFeilds}>
        <TouchableOpacity onPress={editing ? handleSave : handleEdit}>
          <Icon name={editing ? 'save' : 'edit'} size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.deleteTask()}>
          <Icon name="trash" size={30} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 20,
  },
  indexContainer: {
    backgroundColor: '#87CEEB',
    borderRadius: 12,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
  },
  index: {
    color: '#fff',
    fontSize: 20,
  },
  taskContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    minHeight: 50,
    marginRight: 5,
  },
  editTrashFeilds: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flex: 0.3,
    paddingHorizontal: 10,
    paddingVertical: 5,
    minHeight: 50,
  },
  task: {
    color: '#000000',
    width: '90%',
    fontSize: 16,
  },
  delete: {
    marginLeft: 10,
  },
});

export default TaskItem;
