import React, { useState, useEffect } from "react";
import { View, Image, Text, ActivityIndicator, ImageBackground } from "react-native";
import {
  DefaultTheme,
  Provider as PaperProvider,
  Button,
  TextInput,
} from "react-native-paper";

//Redux
import { connect } from "react-redux";
import PropTypes from "prop-types";

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: "#5465ff",
    accent: "yellow",
  },
};

function LoadingPage({ navigation, auth }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchHistory = () => {
      setLoading(false);
      navigation.navigate("Home")
    }
    // Tunggu 5 detik abis itu navigate home
    const interval = setInterval(fetchHistory, 3000);
    return () => clearInterval(interval);
  }, [])
  return (
    <PaperProvider theme={theme}>
     
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
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
              fontSize: 25,
              marginBottom: "5%",
              fontFamily: 'robotoRegular',
              textAlign: 'center'
            }}
          >
            Welcome Back,{'\n\n'}
            {auth && auth.user && auth.user.name}
          </Text>
          <ActivityIndicator style={{ marginTop: 10 }} size="large" color="#5465ff" />
        </View>
      
    </PaperProvider>
  );
}
// LoadingPage.propTypes = {
//   name: PropTypes.string.isRequired
// };
const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, {})(LoadingPage);
