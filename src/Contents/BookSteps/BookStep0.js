import React, { useState } from "react";
import {
  DefaultTheme,
  Provider as PaperProvider,
  Button,
  TextInput,
} from "react-native-paper";
import { Text, View, Dimensions, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import DatePicker from "react-native-datepicker";
import StepIndicator from "react-native-step-indicator";
import { ScrollView } from "react-native-gesture-handler";

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

function Book0({}) {
  const dateNow = new Date(Date.now());
  const navigation = useNavigation();
  const [visitee, setVisitee] = useState("");
  const [ward, setWard] = useState("");
  const [date, setDate] = useState("");
  const onPress = () => {
    navigation.navigate("Step 1");
  };

  const HospitalCard = ({ nama, url }) => (
    <View
      style={{
        width: "90%",
        flex: 1,
        marginTop: "2%",
        marginBottom: "5%",
        flexDirection: "row",
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
      <TouchableOpacity onPress={onPress}>
        <Image
          source={{ uri: url }}
          style={{
            width: 60,
            borderRadius: 400 / 2,
            overflow: "hidden",
            borderColor: "black",
            borderWidth: 0.1,
            aspectRatio: 1,
            marginRight: 10,
            marginLeft: 10,
          }}
        />
      </TouchableOpacity>

      <Text
        style={{
          fontFamily: "robotoBold",
          fontSize: 18,
          textAlign: "center",
          flex: 7,
          textAlignVertical: "center",
        }}
      >
        {nama}
      </Text>
    </View>
  );
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
                  marginTop: "10%",
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
                    currentPosition={0}
                    labels={labels}
                    stepCount={5}
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
              <ScrollView style={{ width: 300 }}>
                <View
                  style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "white",
                    width: "100%",
                    paddingBottom: "3%",
                    paddingTop: "1%",
                  }}
                >
                  <HospitalCard
                    nama="Cipto Mangunkusumo Hospital"
                    url="https://cdn2.tstatic.net/tribunnewswiki/foto/bank/images/rsupn-dr-cipto-mangunkusumo.jpg"
                  />
                  <HospitalCard
                    nama="Mayapada Hospital"
                    url="https://terminalhrd.com/public/images/article/actual_size/1502938c17c063de1276e95efd1b9822.jpg"
                  />
                  <HospitalCard
                    nama="Siloam Hospital"
                    url="https://cdn.statically.io/img/www.smarterhealth.id/wp-content/uploads/2020/02/logo-siloam-large-768x432.jpg?quality=90&f=auto"
                  />
                  <HospitalCard
                    nama="Hasan Sadikin Hospital"
                    url="https://upload.wikimedia.org/wikipedia/id/3/37/Logo_rshs.jpg"
                  />
                  <HospitalCard
                    nama="Handayani Hospital"
                    url="https://sribu-sg.s3.amazonaws.com/assets/media/contest_detail/2016/7/logo-desain-untuk-rumah-sakit-handayani-579c3b9cca6bcba2e8000002/0779d1089d.jpg"
                  />
                  <HospitalCard
                    nama="Trimitra Hospital"
                    url="https://rstrimitra.com/public/uploads/artikel/pilihan-terapi-gangguan-kesuburan-97932.jpg"
                  />
                  <HospitalCard
                    nama="Pelni Hospital"
                    url="https://cdn-2.tstatic.net/tribunnewswiki/foto/bank/images/rumah-sakit-pelni-logo.jpg"
                  />
                  <HospitalCard
                    nama="Bakti Husada Hospital"
                    url="data:image/jpeg;base64,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"
                  />
                </View>
              </ScrollView>
            </View>
          </View>
        </View>
      </View>
    </PaperProvider>
  );
}

export default Book0;
