import React, { useState } from 'react';
import { KeyboardAvoidingView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from './src/LoginPage';
import HomePage from './src/HomePage';
import RegisterStep1 from './src/RegisterPage/RegisterStep1';
import RegisterStep2 from './src/RegisterPage/RegisterStep2';
import RegisterStep3 from './src/RegisterPage/RegisterStep3';
import RegisterStep4 from './src/RegisterPage/RegisterStep4';
import ForgotStep1 from './src/ForgotPage/ForgotStep1';
import ForgotStep2 from './src/ForgotPage/ForgotStep2';
import LoadingPage from './src/LoadingPage';
//Redux
import { Provider as ProviderRedux } from 'react-redux';
import store from './store';
// Font 
import {
  useFonts,
  Roboto_100Thin,
  Roboto_100Thin_Italic,
  Roboto_300Light,
  Roboto_300Light_Italic,
  Roboto_400Regular,
  Roboto_400Regular_Italic,
  Roboto_500Medium,
  Roboto_500Medium_Italic,
  Roboto_700Bold,
  Roboto_700Bold_Italic,
  Roboto_900Black,
  Roboto_900Black_Italic
} from '@expo-google-fonts/roboto'
import {
  Raleway_100Thin,
  Raleway_100Thin_Italic,
  Raleway_200ExtraLight,
  Raleway_200ExtraLight_Italic,
  Raleway_300Light,
  Raleway_300Light_Italic,
  Raleway_400Regular,
  Raleway_400Regular_Italic,
  Raleway_500Medium,
  Raleway_500Medium_Italic,
  Raleway_600SemiBold,
  Raleway_600SemiBold_Italic,
  Raleway_700Bold,
  Raleway_700Bold_Italic,
  Raleway_800ExtraBold,
  Raleway_800ExtraBold_Italic,
  Raleway_900Black,
  Raleway_900Black_Italic
} from '@expo-google-fonts/raleway'
import { render } from 'react-dom';
import { AppLoading } from 'expo';

console.disableYellowBox = true;
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
// const fetchFonts = () => {
//   return Font.loadAsync({
//     'roboto-bold': require('./src/fonts/Roboto-Bold.ttf'),
//     'roboto-regular': require('./src/fonts/Roboto-Regular.ttf'),
//     'roboto-light': require('./src/fonts/Roboto-Light.ttf'),
//     'roboto-black': require('./src/fonts/Roboto-Black.ttf'),
//   });
// }
function ForgotPassword() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Step 1" component={ForgotStep1} />
      <Stack.Screen name="Step 2" component={ForgotStep2} />
    </Stack.Navigator>
  )
}


export default function App() {
  let [fontsLoaded, error] = useFonts({
    robotoRegular: Roboto_400Regular,
    robotoThin: Roboto_100Thin,
    robotoBold: Roboto_700Bold,
    ralewayRegular: Raleway_400Regular
  });
  if (!fontsLoaded) {
    return <AppLoading />
  }
  return (
    <ProviderRedux store={store}>
        <NavigationContainer>
          <Stack.Navigator headerMode='none'>
            <Stack.Screen name="Inviso" component={LoginPage} />
            <Stack.Screen name="Home" component={HomePage} />
            <Stack.Screen name="Register Account" component={Register} />
            <Stack.Screen name="Forgot Password" component={ForgotPassword} />
            <Stack.Screen name="Loading Page" component={LoadingPage} />
          </Stack.Navigator>
        </NavigationContainer>
    </ProviderRedux>
  );
}


