import React, { useState } from "react";
import { View, Image, Text } from "react-native";
import {
  DefaultTheme,
  Provider as PaperProvider,
  Button,
  TextInput,
} from "react-native-paper";

//Redux
import { connect } from "react-redux";
import { loadUser, loginCognito } from "./actions/auth";
const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: "purple",
    accent: "yellow",
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
    navigation.navigate('Loading Page')
  };
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
          }}
        >
          Welcome Back
        </Text>
        {/* Kalo failed login attempt */}
        <Text
          style={{
            fontSize: 20,
            alignSelf: "center",
            marginBottom: "5%",
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
        >
          Login
        </Button>
        <Text
          style={{
            textAlign: "center",
            fontSize: 12,
            marginBottom: "5%",
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
