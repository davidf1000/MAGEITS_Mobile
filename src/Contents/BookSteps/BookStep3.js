import React, { useState } from "react";
import {
  DefaultTheme,
  Provider as PaperProvider,
  Button,
} from "react-native-paper";
import { Text, View, Dimensions } from "react-native";
import { Table, Col } from "react-native-table-component";
import StepIndicator from "react-native-step-indicator";

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: "#4b6ed6",
    accent: "yellow",
  },
};

const { width, height } = Dimensions.get("window");

const labels = [
  "Pick\nschedule",
  "Select\nsession",
  "Confirmation",
  "Digital\nBadge",
];

const customStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize: 30,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: "#4b6ed6",
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: "#4b6ed6",
  stepStrokeUnFinishedColor: "#aaaaaa",
  separatorFinishedColor: "#4b6ed6",
  separatorUnFinishedColor: "#aaaaaa",
  stepIndicatorFinishedColor: "#4b6ed6",
  stepIndicatorUnFinishedColor: "#ffffff",
  stepIndicatorCurrentColor: "#ffffff",
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: "#4b6ed6",
  stepIndicatorLabelFinishedColor: "#ffffff",
  stepIndicatorLabelUnFinishedColor: "#aaaaaa",
  labelColor: "#999999",
  labelSize: 13,
  currentStepLabelColor: "#4b6ed6",
};

function Book3({ route, navigation }) {
  const { visitee, ward, date, session } = route.params;
  const state = {
    tableHead: ["Visitee", "Ward", "Date", "Session"],
    tableData: [visitee, ward, date, session],
  };

  return (
    <PaperProvider theme={theme}>
      <View style={{ flex: 1, backgroundColor: '#4b6ed6', paddingTop: 10, paddingLeft: 1, paddingRight: 1, paddingBottom: 10 }}>
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
                flex: 2,
                alignItems: "center",
                justifyContent: "center",
                marginTop: "10%",
                marginBottom: "5%",
              }}
            >
              <Text
                style={{
                  fontSize: 30,
                  alignSelf: "center",
                  marginTop: "10%",
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
                    stepCount={4}
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
              <Text
                style={{
                  fontSize: 17,
                  alignSelf: "center",
                  margin: "5%",
                  textAlign: "justify",
                  fontFamily: "robotoRegular",
                }}
              >
                Please confirm your visit details.
            {"\n"}
              </Text>
              <Table
                borderStyle={{ borderWidth: 2, borderColor: "#4b6ed6" }}
                style={{ flexDirection: "row", width: 300 }}
              >
                <Col
                  data={state.tableHead}
                  textStyle={{
                    fontSize: 20,
                    margin: 6,
                    textAlign: "left",
                    fontFamily: "robotoRegular",
                  }}
                  heightArr={[40, 40, 40, 40, 40]}
                />
                <Col
                  data={state.tableData}
                  textStyle={{
                    fontSize: 20,
                    margin: 6,
                    textAlign: "right",
                    fontFamily: "robotoRegular",
                  }}
                  heightArr={[40, 40, 40, 40, 40]}
                />
              </Table>
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
                  navigation.navigate("Step 2");
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
                  navigation.navigate("Step 4", {
                    visitee: visitee,
                    ward: ward,
                    date: date,
                    session: session,
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
                Book
          </Button>
            </View>
          </View>
        </View>
      </View>
    </PaperProvider>
  );
}

export default Book3;
