import React, { useState } from "react";
import {
  DefaultTheme,
  Provider as PaperProvider,
  Button,
  TextInput,
} from "react-native-paper";
import { Text, View, Dimensions, Image,TouchableOpacity } from "react-native";
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

function Book0({}) {
  const dateNow = new Date(Date.now());
  const navigation = useNavigation();
  const [visitee, setVisitee] = useState("");
  const [ward, setWard] = useState("");
  const [date, setDate] = useState("");
  const onPress = ()=>{
    navigation.navigate('Step 1');
  }

  const HospitalCard = ({nama,url}) => (
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
     <TouchableOpacity
          onPress={onPress}
        >
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
                flex: 2,
                alignItems: "center",
                justifyContent: "center",
                marginTop: "2%",
                marginBottom: "2%",
              }}
            >
              <Text
                style={{
                  fontSize: 30,
                  alignSelf: "center",
                  marginTop: "2%",
                  marginBottom: "2%",
                  fontFamily: "robotoRegular",
                  flex: 1,
                }}
              >
                Choose hospital
              </Text>
            </View>
            <View
              style={{
                flex: 12,
                alignItems: "center",
                justifyContent: "flex-start",
                margin: "2%",
              }}
            >
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
                  <HospitalCard nama="Cipto Mangunkusumo Hospital" url="https://cdn2.tstatic.net/tribunnewswiki/foto/bank/images/rsupn-dr-cipto-mangunkusumo.jpg"/>
                  <HospitalCard nama="Mayapada Hospital" url="https://terminalhrd.com/public/images/article/actual_size/1502938c17c063de1276e95efd1b9822.jpg"/>
                  <HospitalCard nama="Siloam Hospital" url="https://cdn.statically.io/img/www.smarterhealth.id/wp-content/uploads/2020/02/logo-siloam-large-768x432.jpg?quality=90&f=auto" />
                  <HospitalCard nama="Hasan Sadikin Hospital" url="https://upload.wikimedia.org/wikipedia/id/3/37/Logo_rshs.jpg" />
                  <HospitalCard nama="Handayani Hospital" url="https://sribu-sg.s3.amazonaws.com/assets/media/contest_detail/2016/7/logo-desain-untuk-rumah-sakit-handayani-579c3b9cca6bcba2e8000002/0779d1089d.jpg"/>
                  <HospitalCard nama="Trimitra Hospital" url="https://rstrimitra.com/public/uploads/artikel/pilihan-terapi-gangguan-kesuburan-97932.jpg"/>
              </View>

            </View>
            {/* <View
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
            </View> */}
          </View>
        </View>
      </View>
    </PaperProvider>
  );
}

export default Book0;
