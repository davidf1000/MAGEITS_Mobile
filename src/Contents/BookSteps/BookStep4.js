import React, { useState } from 'react';
import { DefaultTheme, Provider as PaperProvider, Button } from 'react-native-paper';
import { Text, View, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { connect } from "react-redux";
import {
    getAvailableSessions,
    bookSchedule,
  } from "../../actions/api";
import PropTypes from "prop-types";
import StepIndicator from 'react-native-step-indicator';

const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
        ...DefaultTheme.colors,
        primary: '#4b6ed6',
        accent: 'yellow',
    },
};

const { width, height } = Dimensions.get('window');

const labels = ["Step 1", "Step 2", "Step 3", "Step 4"];
const customStyles = {
    stepIndicatorSize: 25,
    currentStepIndicatorSize: 30,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 3,
    stepStrokeCurrentColor: '#4b6ed6',
    stepStrokeWidth: 3,
    stepStrokeFinishedColor: '#4b6ed6',
    stepStrokeUnFinishedColor: '#aaaaaa',
    separatorFinishedColor: '#4b6ed6',
    separatorUnFinishedColor: '#aaaaaa',
    stepIndicatorFinishedColor: '#4b6ed6',
    stepIndicatorUnFinishedColor: '#ffffff',
    stepIndicatorCurrentColor: '#ffffff',
    stepIndicatorLabelFontSize: 13,
    currentStepIndicatorLabelFontSize: 13,
    stepIndicatorLabelCurrentColor: '#4b6ed6',
    stepIndicatorLabelFinishedColor: '#ffffff',
    stepIndicatorLabelUnFinishedColor: '#aaaaaa',
    labelColor: '#999999',
    labelSize: 13,
    currentStepLabelColor: '#4b6ed6'
}

function Book4({route,userId, name}) {
    const { visitee, ward, date, session } = route.params;
    const navigation2 = useNavigation();
    const bookApi = async () =>
    {
        const dataSent = {
            visitor: name,
            userid: userId,
            visitee: visitee,
            room: String(ward),
            date: date,
            session: String(session),
          };
          console.log(dataSent);
        const res =await bookSchedule(dataSent);
        console.log("RESPOND :",res);

        navigation2.navigate('Book Badge', {
            bookId:res.body
        } )
    }
    return (
        <PaperProvider theme={theme}>
            <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center', marginTop: '10%', marginBottom: '5%' }}>
                <Text
                        style={{
                            fontSize: 30,
                            alignSelf: 'center',
                            marginTop: '10%',
                            marginBottom: '5%',
                            fontFamily: 'robotoRegular',
                            flex: 1
                        }}>
                        Book a Visit
                    </Text>
                    <View style={{ flex: 1, marginBottom: '5%' }}>
                        <View style={{ width: width - 20 }}>
                            <StepIndicator
                                customStyles={customStyles}
                                currentPosition={3}
                                labels={labels}
                                stepCount={4}
                            />
                        </View>
                    </View>
                </View>
                <View style={{ flex: 5, alignItems: 'center', justifyContent: 'flex-start', margin: '5%' }}>
                    <Text
                        style={{
                            fontSize: 15,
                            alignSelf: 'center',
                            margin: '5%',
                            fontFamily: 'robotoRegular'
                        }}>
                        Render your digital badge now !
                    </Text>
                    <Text
                        onPress={bookApi}
                        style={{
                            textAlign: 'center',
                            fontSize: 15,
                            marginBottom: '30%',
                            color: 'blue',
                            fontFamily: 'robotoRegular'
                        }}
                    >
                        Click here
                    </Text>
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
  