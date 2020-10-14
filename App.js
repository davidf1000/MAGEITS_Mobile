import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from './src/LoginPage'
import HomePage from './src/HomePage'
import RegisterAccountPage from './src/RegisterPage'
import ForgotPasswordPage from './src/ForgotPage'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Inviso" component={LoginPage} />
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Register Account" component={RegisterAccountPage} />
        <Stack.Screen name="Forgot Password" component={ForgotPasswordPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


