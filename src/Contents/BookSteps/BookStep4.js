import React, { useState } from "react";
import {
  DefaultTheme,
  Provider as PaperProvider,
  Button,
} from "react-native-paper";
import { Text, View, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { connect } from "react-redux";
import { getAvailableSessions, bookSchedule } from "../../actions/api";
import PropTypes from "prop-types";
import StepIndicator from "react-native-step-indicator";

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: "#5465ff",
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

function Book4({ route, userId, name }) {
  const { visitee, ward, date, session } = route.params;
  const navigation2 = useNavigation();
  const bookApi = async () => {
    const dataSent = {
      visitor: name,
      userid: userId,
      visitee: visitee,
      room: String(ward),
      date: date,
      session: String(session),
    };
    console.log(dataSent);
    const res = await bookSchedule(dataSent);
    console.log("RESPOND :", res);

    navigation2.navigate("Book Badge", {
      bookId: res.body,
    });
  };
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
                    currentPosition={3}
                    labels={labels}
                    stepCount={4}
                  />
                </View>
              </View>
            </View>
            <View
              style={{
                flex: 5,
                alignItems: "center",
                justifyContent: "flex-start",
                margin: "5%",
              }}
            >
              <Text
                style={{
                  fontSize: 25,
                  alignSelf: "center",
                  margin: "5%",
                  textAlign: "center",
                  fontFamily: "robotoRegular",
                }}
              >
                Thank you for booking a visit!
          </Text>
              <Text
                style={{
                  fontSize: 15,
                  alignSelf: "center",
                  margin: "5%",
                  textAlign: "justify",
                  fontFamily: "robotoRegular",
                }}
              >
                Click the button below to generate your
                visitor digital badge
            {"\n"}
              </Text>
              <Button
                mode="contained"
                onPress={bookApi}
                theme={{ roundness: 10 }}
                style={{
                  width: 140,
                  height: 50,
                  justifyContent: "center",
                }}
                labelStyle={{
                  fontFamily: "robotoRegular",
                }}
              >
                View Badge
          </Button>
            </View>
          </View>
        </View>
      </View>
    </PaperProvider>
  );
}

Book4.propTypes = {
  userId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  userId: state.auth.attributes.userId,
  name: state.auth.attributes.name,
});

export default connect(mapStateToProps, {})(Book4);
