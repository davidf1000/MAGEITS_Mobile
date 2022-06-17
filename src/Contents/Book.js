import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import BookStep0 from "./BookSteps/BookStep0";
import BookStep1 from "./BookSteps/BookStep1";
import BookStep2 from "./BookSteps/BookStep2";
import BookStep3 from "./BookSteps/BookStep3";
import BookStep4 from "./BookSteps/BookStep4";
import BookBadge from "./BookSteps/BookBadge";
import LoadingBook from "./BookSteps/LoadingBook";

const Stack = createStackNavigator();

export default function Book({ navigation }) {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Step 0" component={BookStep0} />
      <Stack.Screen name="Step 1" component={BookStep1} />
      <Stack.Screen name="Step 2" component={BookStep2} />
      <Stack.Screen name="Step 3" component={BookStep3} />
      <Stack.Screen name="Step 4" component={BookStep4} />
      <Stack.Screen name="Book Badge" component={BookBadge} />
      <Stack.Screen name="Loading Book" component={LoadingBook} />
    </Stack.Navigator>
  );
}
