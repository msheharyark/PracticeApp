import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawerContent from './CustomDrawerContent';
import ProfileScreen from './ProfileScreen';
import Todays_Task from './TodaysTaskScreen';

const Drawer = createDrawerNavigator();
function MainDrawer() {
  console.log('MainDrawer Screen');
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      initialRouteName="Todays_Task"
      screenOptions={{
        drawerStyle: {width: '80%'},
      }}>
      <Drawer.Screen
        name={'Todays_Task'}
        component={Todays_Task}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name={'ProfileScreen'}
        component={ProfileScreen}
        options={{
          headerShown: false,
        }}
      />
    </Drawer.Navigator>
  );
}

export default MainDrawer;
