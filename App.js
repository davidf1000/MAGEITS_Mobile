import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from './src/LoginPage'
import HomePage from './src/HomePage'
import DigitalBadge from './src/DigitalBadge'
import RegisterStep1 from './src/RegisterPage/RegisterStep1'
import RegisterStep2 from './src/RegisterPage/RegisterStep2'
import RegisterStep3 from './src/RegisterPage/RegisterStep3'
import RegisterStep4 from './src/RegisterPage/RegisterStep4'
import ForgotStep1 from './src/ForgotPage/ForgotStep1'
import ForgotStep2 from './src/ForgotPage/ForgotStep2'

const Stack = createStackNavigator();

function Register() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Step 1" component={RegisterStep1} />
      <Stack.Screen name="Step 2" component={RegisterStep2} />
      <Stack.Screen name="Step 3" component={RegisterStep3} />
      <Stack.Screen name="Step 4" component={RegisterStep4} />
    </Stack.Navigator>
  )
}

function ForgotPassword() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Step 1" component={ForgotStep1} />
      <Stack.Screen name="Step 2" component={ForgotStep2} />
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Inviso" component={LoginPage} />
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Register Account" component={Register} />
        <Stack.Screen name="Forgot Password" component={ForgotPassword} />
        <Stack.Screen name="Digital Badge" component={DigitalBadge} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


