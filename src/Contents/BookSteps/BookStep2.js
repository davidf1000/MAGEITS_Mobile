import React, { useState, useEffect } from "react";
import {
  DefaultTheme,
  Provider as PaperProvider,
  Button,
  RadioButton,
} from "react-native-paper";
import { Text, View, Dimensions, ActivityIndicator, Image } from "react-native";
import { getAvailableSessions } from "../../actions/api";
import StepIndicator from "react-native-step-indicator";

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: "#5465ff",
    accent: "black",
  },
};

const { width, height } = Dimensions.get("window");

const labels = [
  "Choose\nHospital",
  "Pick\nschedule",
  "Select\nsession",
  "Confirm\nBook",
  "Digital\nBadge",
];
const customStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize: 30,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: "#5465ff",
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: "#5465ff",
  stepStrokeUnFinishedColor: "#aaaaaa",
  separatorFinishedColor: "#5465ff",
  separatorUnFinishedColor: "#aaaaaa",
  stepIndicatorFinishedColor: "#5465ff",
  stepIndicatorUnFinishedColor: "#ffffff",
  stepIndicatorCurrentColor: "#ffffff",
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: "#5465ff",
  stepIndicatorLabelFinishedColor: "#ffffff",
  stepIndicatorLabelUnFinishedColor: "#aaaaaa",
  labelColor: "#999999",
  labelSize: 13,
  currentStepLabelColor: "#5465ff",
};

function Book2({ route, navigation }) {
  const [loaded, setLoaded] = useState(false);
  const { visitee, ward, date } = route.params;
  const [checked, setChecked] = useState();
  const [sessions, setSessions] = useState([]);
  useEffect(() => {
    const fetchSession = async () => {
      if (date === "") return;
      const sessionFetch = await getAvailableSessions(date);
      setSessions(sessionFetch);
      setLoaded(true);
    };
    fetchSession();
    console.log("SESS", sessions);
  }, []);
  return (
    <PaperProvider theme={theme}>
      <View style={{ flex: 1, backgroundColor: '#5465ff', paddingTop: 10, paddingLeft: 1, paddingRight: 1, paddingBottom: 10 }}>
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '5%',
            marginBottom: '2%',
            marginLeft: '5%',
            marginRight: '5%',
            borderRadius: 20,
            backgroundColor: '#fff',
            padding: 5,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.5,
            shadowRadius: 2,
            elevation: 2,
          }}
        >
          <View style={{ flex: 2, alignItems: "center", justifyContent: "center" }}>
            <View
              style={{
                flex: 2.5,
                alignItems: "center",
                justifyContent: "center",
                marginTop: "10%",
                marginBottom: "5%",
              }}
            >
              <Image
                source={require('../../img/logo.png')}
                style={{
                  padding: 5,
                  height: 30,
                  width: 30,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              />
              <Text
                style={{
                  fontSize: 30,
                  alignSelf: "center",
                  marginTop: "5%",
                  marginBottom: "5%",
                  fontFamily: "robotoRegular",
                  flex: 1,
                }}
              >
                Book a Visit
          </Text>
              <View style={{ flex: 1, marginBottom: "5%" }}>
                <View style={{ width: width - 10, paddingLeft: 20, paddingRight: 20 }}>
                  <StepIndicator
                    customStyles={customStyles}
                    currentPosition={2}
                    labels={labels}
                    stepCount={5}
                  />
                </View>
              </View>
            </View>
            <View
              style={{
                flex: 4,
                alignItems: "center",
                justifyContent: "flex-start",
                margin: "5%",
              }}
            >
              {loaded ? (
                sessions.map((x, i) => (
                  <View style={{ flexDirection: "row", marginTop: 15 }} key={i}>
                    <RadioButton
                      value={`Session ${i + 1} (${x.session_from.substring(
                        0,
                        5
                      )} - ${x.session_to.substring(0, 5)})`}
                      status={
                        checked === String(x.session_number)
                          ? "checked"
                          : "unchecked"
                      }
                      onPress={() => setChecked(String(x.session_number))}
                      uncheckedColor="gray"
                      color="#5465ff"
                    />
                    <Text style={{ fontFamily: "robotoRegular", fontSize: 20, marginTop: 3, marginHorizontal: 14 }}>{`Session ${i + 1
                      } (${x.session_from.substring(0, 5)} - ${x.session_to.substring(
                        0,
                        5
                      )})`}</Text>
                  </View>
                ))
              ) : (
                  <ActivityIndicator
                    style={{ margin: "20%" }}
                    size="large"
                    color="#5465ff"
                  />
                )}
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                alignItems: "center",
                marginTop: "10%",
                marginBottom: "5%",
              }}
            >
              <Button
                mode="contained"
                onPress={() => {
                  navigation.navigate("Step 1");
                }}
                theme={{ roundness: 10 }}
                style={{
                  width: 100,
                  height: 50,
                  justifyContent: "center",
                  marginRight: "5%",
                }}
                labelStyle={{
                  fontFamily: "robotoRegular",
                }}
              >
                Back
          </Button>
              <Button
                mode="contained"
                onPress={() => {
                  navigation.navigate("Step 3", {
                    visitee: visitee,
                    ward: ward,
                    date: date,
                    session: checked,
                  });
                }}
                theme={{ roundness: 10 }}
                style={{
                  width: 100,
                  height: 50,
                  justifyContent: "center",
                }}
                labelStyle={{
                  fontFamily: "robotoRegular",
                }}
              >
                Next
          </Button>
            </View>
          </View>
        </View>
      </View>
    </PaperProvider>
  );
}

export default Book2;
