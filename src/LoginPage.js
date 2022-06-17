import React, { useState } from "react";
import { View, Image, Text, ImageBackground } from "react-native";
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
    primary: "#5465ff",
    accent: "black",
  },
};

const LoginPage = ({
  navigation,
  loginCognito,
  isAdmin,
  isAuthenticated,
  setAlert,
  alert,
  loading,
}) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const onSubmit = async () => {
    console.log("PRESSED !");
    // await loginCognito(email, password);
    // Biar cepet debugnya
    await loginCognito("davidfauzi1000@gmail.com", "Stylish883");
    navigation.navigate("Loading Page");
  };

  return (
    <PaperProvider theme={theme}>
      <ImageBackground
        source={require("./img/Load-Transisi-1.png")}
        style={{ flex: 1, resizeMode: "cover", justifyContent: "center" }}
      >
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
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
              fontFamily: "robotoRegular",
            }}
          >
            Welcome Back{"\n"}
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
              fontFamily: "robotoRegular",
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
              fontFamily: "robotoRegular",
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
              fontFamily: "robotoRegular",
            }}
          >
            Login
          </Button>
          <Text
            style={{
              textAlign: "center",
              fontSize: 12,
              marginBottom: "5%",
              fontFamily: "robotoRegular",
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
              fontFamily: "robotoRegular",
            }}
          >
            Forgot Password
          </Text>
        </View>
      </ImageBackground>
    </PaperProvider>
  );
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  loading: state.auth.loading,
  isAdmin: state.auth.isAdmin,
  alert: state.alert,
});

export default connect(mapStateToProps, { loadUser, loginCognito })(LoginPage);

// export default LoginPage;
