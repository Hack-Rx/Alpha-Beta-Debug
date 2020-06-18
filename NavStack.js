import React, {useState, Fragment} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Dashboard from './screens/Dashboard';
import Introduction from './screens/Introduction';
import Name from './screens/Introduction/Name';
import DateOfBirth from './screens/Introduction/DateOfBirth';
import Gender from './screens/Introduction/Gender';
import FinalIntroduction from './screens/Introduction/FinalIntroduction';
import ChatBox from './screens/ChatBox';
import SignOut from './screens/SignOut';

const Drawer = createDrawerNavigator();

function DrawerDash() {
  return (
    <Drawer.Navigator initalRoute="Dashboard">
      <Drawer.Screen
        name="Dashboard"
        component={Dashboard}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="Chat"
        component={ChatBox}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="SignOut"
        component={SignOut}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
}

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initalRoute="Drawer">
        <Stack.Screen
          name="Drawer"
          component={DrawerDash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Introduction"
          component={Introduction}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Name"
          component={Name}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DOB"
          component={DateOfBirth}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Gender"
          component={Gender}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="FinalIntroduction"
          component={FinalIntroduction}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
