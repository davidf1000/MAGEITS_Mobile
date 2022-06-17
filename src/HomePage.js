import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import {
  DefaultTheme,
  Provider as PaperProvider,
  Text,
} from "react-native-paper";
import Home from "./Contents/Home";
import Book from "./Contents/Book";
import History from "./Contents/History";
import Profile from "./Contents/Profile";

const theme = {
  ...DefaultTheme,
  roundness: 4,
  colors: {
    ...DefaultTheme.colors,
    primary: "#5465ff",
    accent: "yellow",
  },
};

const Tab = createBottomTabNavigator();

function HomePage({ navigation }) {
  return (
    <PaperProvider theme={theme}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "ios-home" : "ios-home";
            } else if (route.name === "Book") {
              iconName = focused ? "ios-book" : "ios-book";
            } else if (route.name === "History") {
              iconName = focused ? "ios-clock" : "ios-clock";
            } else if (route.name === "Profile") {
              iconName = focused ? "ios-person" : "ios-person";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "#5465ff",
          inactiveTintColor: "gray",
        }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Book" component={Book} />
        <Tab.Screen name="History" component={History} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </PaperProvider>
  );
}

export default HomePage;
