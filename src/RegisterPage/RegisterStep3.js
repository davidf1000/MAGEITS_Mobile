import React, { useState } from 'react';
import { DefaultTheme, Provider as PaperProvider, Button, TextInput } from 'react-native-paper';
import { Text, View, Image, Dimensions } from 'react-native';
import StepIndicator from 'react-native-step-indicator';

const { width, height } = Dimensions.get('window');

const labels = ["Email\nand\nPassword", "Personal\nInfo", "Upload\nCredentials", "Confirm\nEmail"];
const customStyles = {
    stepIndicatorSize: 25,
    currentStepIndicatorSize: 30,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 3,
    stepStrokeCurrentColor: '#5465ff',
    stepStrokeWidth: 3,
    stepStrokeFinishedColor: '#5465ff',
    stepStrokeUnFinishedColor: '#aaaaaa',
    separatorFinishedColor: '#5465ff',
    separatorUnFinishedColor: '#aaaaaa',
    stepIndicatorFinishedColor: '#5465ff',
    stepIndicatorUnFinishedColor: '#ffffff',
    stepIndicatorCurrentColor: '#ffffff',
    stepIndicatorLabelFontSize: 13,
    currentStepIndicatorLabelFontSize: 13,
    stepIndicatorLabelCurrentColor: '#5465ff',
    stepIndicatorLabelFinishedColor: '#ffffff',
    stepIndicatorLabelUnFinishedColor: '#aaaaaa',
    labelColor: '#999999',
    labelSize: 13,
    currentStepLabelColor: '#5465ff'
}

const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
        ...DefaultTheme.colors,
        primary: '#5465ff',
        accent: 'yellow',
    },
};

function Register3({ navigation }) {
    const [uploadProfile, setUploadProfile] = React.useState('');
    const [uploadEKTP, setUploadEKTP] = React.useState('');
    return (
        <PaperProvider theme={theme}>
            <Image source={require('../img/bannerAtas.png')} style={{ flex: 0.1, resizeMode: 'stretch', alignItems: 'flex-start' }} />
            <View
                style={{
                    flex: 1,
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
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
                <View style={{ flex: 2.5, alignItems: 'center', justifyContent: 'center', margin: '5%' }}>
                    <Image
                        source={require('../img/logo.png')}
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
                            fontSize: 25,
                            alignSelf: 'center',
                            margin: '5%',
                            fontFamily: 'robotoRegular'
                        }}>
                        Account Registration
                        </Text>
                    <View style={{ flex: 1, marginBottom: '5%' }}>
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
                <View style={{ flex: 4, alignItems: 'center', justifyContent: 'flex-start', margin: '5%' }}>
                <Button
                        // label="Upload E-KTP"
                        // value={uploadEKTP}
                        // onChangeText={uploadEKTP => setUploadEKTP(uploadEKTP)}
                        style={{
                            alignSelf: 'center',
                            marginBottom: '5%',
                            height: 60,
                            width: 250,
                            alignContent: 'center',
                            justifyContent: 'center',
                            // colors:""
                            borderColor:"#aaaaaa",
                            borderWidth:1
                        }}
                    >
                    Upload Profile Picture
                    </Button>
                    <Button
                        // label="Upload E-KTP"
                        // value={uploadEKTP}
                        // onChangeText={uploadEKTP => setUploadEKTP(uploadEKTP)}
                        style={{
                            alignSelf: 'center',
                            marginBottom: '5%',
                            height: 60,
                            width: 250,
                            alignContent: 'center',
                            justifyContent: 'center',
                            // colors:""
                            borderColor:"#aaaaaa",
                            borderWidth:1
                        }}
                    >
                    Upload E-KTP 
                    </Button>
                </View>
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', marginTop: '10%', marginBottom: '5%' }}>
                    <Button
                        mode="contained"
                        onPress={() => { navigation.navigate('Step 2') }}
                        theme={{ roundness: 10 }}
                        style={{
                            width: 100,
                            height: 50,
                            justifyContent: 'center',
                            marginRight: '5%'
                        }}
                    >
                        Back
                        </Button>
                    <Button
                        mode="contained"
                        onPress={() => { navigation.navigate('Step 4') }}
                        theme={{ roundness: 10 }}
                        style={{
                            width: 100,
                            height: 50,
                            justifyContent: 'center',
                            marginLeft: '5%'
                        }}
                    >
                        Next
                        </Button>


                </View>
            </View>
        </PaperProvider>
    );
}

export default Register3;