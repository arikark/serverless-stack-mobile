import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { Feather } from "@expo/vector-icons";

// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import AccountScreen from "../features/Account/screens/AccountScreen";
import SwipeScreen from "../features/Swipe/screens/SwipeScreen";
import MapsScreen from "../features/Maps/screens/MapsScreen";

const StackOne = createStackNavigator();
const StackOneScreens = () => (
  <StackOne.Navigator screenOptions={{ headerShown: false }}>
    <StackOne.Screen name="Notes" component={SwipeScreen} />
  </StackOne.Navigator>
);

const StackTwo = createStackNavigator();
const StackTwoScreens = () => (
  <StackTwo.Navigator screenOptions={{ headerShown: false }}>
    <StackTwo.Screen name="Maps" component={MapsScreen} />
  </StackTwo.Navigator>
);

const StackThree = createStackNavigator();
const StackThreeScreens = () => (
  <StackThree.Navigator screenOptions={{ headerShown: false }}>
    <StackThree.Screen name="Account" component={AccountScreen} />
  </StackThree.Navigator>
);

// const AppStack = createBottomTabNavigator();
// export default function AppStackScreens() {
//   return (
//     <AppStack.Navigator
//       initialRouteName="Notes"
//       tabBarOptions={{
//         activeTintColor: "#e91e63",
//         keyboardHidesTabBar: true,
//         style: {
//           backgroundColor: "transparent",
//           borderTopWidth: 0,
//           position: "absolute",
//           left: 10,
//           right: 10,
//           bottom: 20,
//           height: 100,
//         },
//       }}
//     >
//       <AppStack.Screen name="Notes" component={NotesScreens} />
//       <AppStack.Screen name="Maps" component={MapsScreens} />
//       <AppStack.Screen name="Account" component={AccountScreens} />
//     </AppStack.Navigator>
//   );
// }
const AppStack = createMaterialTopTabNavigator();
export default function AppStackScreens() {
  return (
    <AppStack.Navigator
      initialRouteName="Notes"
      tabBarOptions={{
        showLabel: false,
        showIcon: true,
        indicatorStyle: {
          width: 0,
          height: 0,
          elevation: 0,
        },
        activeTintColor: "blue",
        style: {
          backgroundColor: "transparent",
          position: "absolute",
          left: 0,
          right: 0,
          elevation: 0,
          shadowOpacity: 0,
        },
      }}
    >
      <AppStack.Screen
        name="Notes"
        component={StackOneScreens}
        options={{
          tabBarIcon: () => <Feather name="home" size={24} color="black" />,
        }}
      />
      <AppStack.Screen
        name="Maps"
        component={StackTwoScreens}
        options={{
          tabBarIcon: () => <Feather name="map" size={24} color="black" />,
        }}
      />
      <AppStack.Screen
        name="Account"
        component={StackThreeScreens}
        options={{
          tabBarIcon: () => <Feather name="settings" size={24} color="black" />,
        }}
      />
    </AppStack.Navigator>
  );
}
