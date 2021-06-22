import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import AccountScreen from '../screens/Account/AccountScreen';
import NotesListScreen from '../screens/Notes/NotesListScreen';
import MapsScreen from '../screens/Maps/MapsScreen';

const NotesStack = createStackNavigator();
const NotesScreens = () => (
  <NotesStack.Navigator>
    <NotesStack.Screen name="Notes" component={NotesListScreen} />
  </NotesStack.Navigator>
);

const MapsStack = createStackNavigator();
const MapsScreens = () => (
  <MapsStack.Navigator>
    <MapsStack.Screen name="Maps" component={MapsScreen} />
  </MapsStack.Navigator>
);

const AccountStack = createStackNavigator();
const AccountScreens = () => (
  <AccountStack.Navigator>
    <AccountStack.Screen name="Account" component={AccountScreen} />
  </AccountStack.Navigator>
);

const AppStack = createBottomTabNavigator();
export default function AppStackScreens() {
  return (
    <AppStack.Navigator>
      <AppStack.Screen name="Notes" component={NotesScreens} />
      <AppStack.Screen name="Maps" component={MapsScreens} />
      <AppStack.Screen name="Account" component={AccountScreens} />
    </AppStack.Navigator>
  );
};
