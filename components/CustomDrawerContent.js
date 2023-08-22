import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

function CustomDrawerContent({navigation}) {
  return (
    <View style={{borderColor: 'red', borderWidth: 0, paddingHorizontal: 10}}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{height: 54, justifyContent: 'center'}}>
        <Text style={{color: 'black'}}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{height: 54, justifyContent: 'center'}}>
        <Text style={{color: 'black'}}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
}

export default CustomDrawerContent;
