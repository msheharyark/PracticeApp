/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, Button } from 'react-native';

const ProfileScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Welcome to Profile Screen</Text>
      <Button
        title="Go to Todays_Task"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};

export default ProfileScreen;
