import React, { useState } from 'react';
import { DefaultTheme, Provider as PaperProvider, Button, TextInput } from 'react-native-paper';
import { Text, View, Dimensions, Image } from 'react-native';
import StepIndicator from 'react-native-step-indicator';

const { width, height } = Dimensions.get('window');

const labels = ["Email", "Confirm\nEmail"];
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

function Forgot2({ navigation }) {
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
                        Forgot Password
                        </Text>
                    <View style={{ flex: 1, marginBottom: '5%' }}>
                        <View style={{ width: width - 10, paddingLeft: 20, paddingRight: 20 }}>
                            <StepIndicator
                                customStyles={customStyles}
                                currentPosition={1}
                                labels={labels}
                                stepCount={2}
                            />
                        </View>
                    </View>
                </View>
                <View style={{ flex: 4, alignItems: 'center', justifyContent: 'flex-start', margin: '5%' }}>
                    <Text
                        style={{
                            fontSize: 20,
                            alignSelf: 'center',
                        }}>
                        Thank you!{'\n'}
                    </Text>
                    <Text
                        style={{
                            fontSize: 16,
                            alignSelf: 'center',
                        }}>
                        Please check your E-mail to reset your password
                    </Text>
                </View>
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', marginTop: '10%', marginBottom: '5%' }}>
                    <Button
                        mode="contained"
                        onPress={() => { navigation.navigate('Inviso') }}
                        theme={{ roundness: 10 }}
                        style={{
                            width: 200,
                            height: 50,
                            justifyContent: 'center',
                        }}
                    >
                        Login
                        </Button>


                </View>
            </View>
        </PaperProvider>
    );
}

export default Forgot2;