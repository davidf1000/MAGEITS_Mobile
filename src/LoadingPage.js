import React, { useState,useEffect } from "react";
import { View, Image, Text } from "react-native";
import {
  DefaultTheme,
  Provider as PaperProvider,
  Button,
  TextInput,
} from "react-native-paper";

//Redux
const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: "#4b6ed6",
    accent: "yellow",
  },
};

function LoginPage({ navigation }) {
    const [loading,setLoading]=useState(true);
    useEffect(()=>{
        const fetchHistory=  ()=>{
            setLoading(false);
            navigation.navigate("Home")
        }
        // Tunggu 5 detik abis itu navigate home
        const interval = setInterval(fetchHistory,3000);
        return ()=>clearInterval(interval);
      },[])
  return (
    <PaperProvider theme={theme}>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center"}}>
        <Image
          source={require("./img/logo.png")}
          style={{
            marginBottom: "10%",
            height: "25%",
            width: "40%",
          }}
        />
        <Text
          style={{
            fontSize: 20,
            marginBottom: "5%",
            fontFamily: 'robotoRegular'
          }}
        >
          Welcome Back
        </Text>
      </View>
    </PaperProvider>
  );
}

export default LoginPage;

// export default LoginPage;
