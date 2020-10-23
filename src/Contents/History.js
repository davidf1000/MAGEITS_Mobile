import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HistoryStep1 from './HistorySteps/HistoryTable'
import HistoryStep2 from './HistorySteps/HistoryBadge'

const Stack = createStackNavigator();

export default function History({navigation}) {
    return (
        <Stack.Navigator headerMode='none'>
          <Stack.Screen name="Main" component={HistoryStep1} />
          <Stack.Screen name="Loading Badge" component={HistoryStep2} />
        </Stack.Navigator>
    );
  }