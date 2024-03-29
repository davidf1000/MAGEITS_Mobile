import React, { useState, useEffect } from "react";
import {
  DefaultTheme,
  Provider as PaperProvider,
  Button,
  TextInput,
} from "react-native-paper";
import { Text, View, Dimensions, Keyboard, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import DatePicker from "react-native-datepicker";
import StepIndicator from "react-native-step-indicator";
const { width, height } = Dimensions.get("window");

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: "#5465ff",
    accent: "yellow",
  },
};

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

function Book1({ naviagation }) {
  const [keyboard, setKeyboard] = useState(false);
  const dateNow = new Date(Date.now());
  const navigation = useNavigation();
  const [visitee, setVisitee] = useState("");
  const [ward, setWard] = useState("");
  const [date, setDate] = useState("");
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboard(true); // or some other action
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboard(false); // or some other action
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);
  return (
    <PaperProvider theme={theme}>
      <View
        style={{
          flex: 1,
          backgroundColor: "#5465ff",
          paddingTop: 10,
          paddingLeft: 1,
          paddingRight: 1,
          paddingBottom: 10,
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "5%",
            marginBottom: "2%",
            marginLeft: "5%",
            marginRight: "5%",
            borderRadius: 20,
            backgroundColor: "#fff",
            padding: 5,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.5,
            shadowRadius: 2,
            elevation: 2,
          }}
        >
          <View
            style={{ flex: 2, alignItems: "center", justifyContent: "center" }}
          >
            {!keyboard && (
              <View
                style={{
                  flex: 2.5,
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: "5%",
                  marginBottom: "5%",
                }}
              >
                <Image
                  source={require("../../img/logo.png")}
                  style={{
                    padding: 5,
                    height: 30,
                    width: 30,
                    justifyContent: "center",
                    alignItems: "center",
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
                  <View
                    style={{
                      width: width - 10,
                      paddingLeft: 20,
                      paddingRight: 20,
                    }}
                  >
                    <StepIndicator
                      customStyles={customStyles}
                      currentPosition={1}
                      labels={labels}
                      stepCount={5}
                    />
                  </View>
                </View>
              </View>
            )}
            <View
              style={{
                flex: 4,
                alignItems: "center",
                justifyContent: "flex-start",
                margin: "5%",
              }}
            >
              <TextInput
                label="Visitee's name"
                value={visitee}
                onChangeText={(visitee) => setVisitee(visitee)}
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
                label="Ward Number"
                value={ward}
                onChangeText={(ward) => setWard(ward)}
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
              <DatePicker
                style={{ width: 300 }}
                date={date}
                mode="date"
                placeholder="select date"
                format="YYYY-MM-DD"
                minDate={dateNow}
                maxDate="2021-05-01"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                  dateIcon: {
                    position: "absolute",
                    left: 0,
                    top: 4,
                    marginLeft: 0,
                  },
                  dateInput: {
                    marginLeft: 36,
                  },
                }}
                onDateChange={(date) => setDate(date)}
              />
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
                  navigation.navigate("Step 2", {
                    visitee: visitee,
                    ward: ward,
                    date: date,
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

export default Book1;
