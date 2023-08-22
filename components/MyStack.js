import React, {useEffect} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import MainDrawer from './MainDrawer';
import SplashScreen from 'react-native-splash-screen';

const Stack = createStackNavigator();
const MyStack = () => {
  useEffect(() => {
    console.log('Stack Screen');
    SplashScreen.hide();
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="MainDrawer"
        screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="MainDrawer"
          component={MainDrawer}
          options={{
            animationEnabled: false,
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
