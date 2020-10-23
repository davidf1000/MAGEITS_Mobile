import React, { useState } from "react";
import { View, Image, Text } from "react-native";
import {
  DefaultTheme,
  Provider as PaperProvider,
  Button,
  TextInput,
} from "react-native-paper";
import {useFonts} from "expo-font";
// import { useFonts } from '@use-expo/font'
//Redux
import { connect } from "react-redux";
import { loadUser, loginCognito } from "./actions/auth";
const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: "#4b6ed6",
    accent: "black",
  },
};

function LoginPage({
  navigation,
  loginCognito,
  isAdmin,
  isAuthenticated,
  setAlert,
  alert,
  loading,
}) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const onSubmit = async () => {
    console.log("PRESSED !");
    // await loginCognito(email, password);
    // Biar cepet debugnya
    await loginCognito("admin@gmail.com", "Admin123");
    navigation.navigate("Loading Page");
  };
  const [loaded] = useFonts({
    // Roboto: require("./Contents/fonts/Roboto-Regular.ttf"),
    Roboto: require("./Contents/fonts/Roboto-Black.ttf"),
  });
  // if (!loaded) {
  //   return null;
  // }
  return (
    <PaperProvider theme={theme}>
    
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Image
          source={require("./img/logo.png")}
          style={{
            alignSelf: "center",
            marginTop: "30%",
            marginBottom: "10%",
            height: "25%",
            width: "40%",
          }}
        />
        <Text
          style={{
            fontSize: 20,
            alignSelf: "center",
            marginBottom: "5%",
            //fontFamily: 'Roboto'
          }}
        >
          Welcome Back{'\n'}
          {loaded ? "LOADED" : "NOT LOADED"}
        </Text>
        {/* Kalo failed login attempt */}
        <Text
          style={{
            fontSize: 20,
            alignSelf: "center",
            marginBottom: "5%",
            //fontFamily: 'Roboto'
          }}
        >
          {alert.length !== 0 && JSON.stringify(alert[0].msg)}
        </Text>
        <TextInput
          label="Email"
          value={email}
          onChangeText={(email) => setEmail(email)}
          style={{
            alignSelf: "center",
            marginBottom: "5%",
            height: 60,
            width: 300,
            alignContent: "center",
            justifyContent: "center",
            //fontFamily: 'Roboto'
          }}
        />
        <TextInput
          label="Password"
          value={password}
          onChangeText={(password) => setPassword(password)}
          style={{
            alignSelf: "center",
            marginBottom: "5%",
            height: 60,
            width: 300,
            alignContent: "center",
            justifyContent: "center",
            //fontFamily: 'Roboto'
          }}
          secureTextEntry={true}
        />
        <Button
          mode="contained"
          onPress={onSubmit}
          theme={{ roundness: 10 }}
          style={{
            alignSelf: "center",
            height: 50,
            width: 200,
            alignContent: "center",
            justifyContent: "center",
            marginBottom: "10%",
          }}
          labelStyle={{
            //fontFamily: 'Roboto'
          }}
        >
          Login
        </Button>
        <Text
          style={{
            textAlign: "center",
            fontSize: 12,
            marginBottom: "5%",
            //fontFamily: 'Roboto'
          }}
        >
          <Text>Don't have an account ? </Text>
          <Text
            onPress={() => navigation.navigate("Register Account")}
            style={{
              color: "blue",
            }}
          >
            Create An Account
          </Text>
        </Text>
        <Text
          onPress={() => navigation.navigate("Forgot Password")}
          style={{
            textAlign: "center",
            fontSize: 12,
            marginBottom: "30%",
            color: "blue",
            //fontFamily: 'Roboto'
          }}
        >
          Forgot Password
        </Text>
      </View>
    </PaperProvider>
  );
}
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  loading: state.auth.loading,
  isAdmin: state.auth.isAdmin,
  alert: state.alert,
});

export default connect(mapStateToProps, { loadUser, loginCognito })(LoginPage);

// export default LoginPage;
