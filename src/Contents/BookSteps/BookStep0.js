import React, { useState } from 'react';
import { DefaultTheme, Provider as PaperProvider, Button, TextInput } from 'react-native-paper';
import { Text, View, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import DatePicker from 'react-native-datepicker'
import StepIndicator from 'react-native-step-indicator';

const { width, height } = Dimensions.get('window');

const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
        ...DefaultTheme.colors,
        primary: '#4b6ed6',
        accent: 'yellow',
    },
};

const labels = ["Pick\nschedule", "Select\nsession", "Confirmation", "Digital\nBadge"];
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


function Book0({ naviagation }) {
    const dateNow = new Date(Date.now());
    const navigation = useNavigation();
    const [visitee, setVisitee] = useState('');
    const [ward, setWard] = useState('');
    const [date, setDate] = useState('');
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
                    <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center', marginTop: '5%', marginBottom: '5%' }}>
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
                                <View style={{ width: width - 10, paddingLeft: 20, paddingRight: 20 }}>
                                    <StepIndicator
                                        customStyles={customStyles}
                                        currentPosition={0}
                                        labels={labels}
                                        stepCount={4}
                                    />
                                </View>
                            </View>
                        </View>
                        <View style={{ flex: 4, alignItems: 'center', justifyContent: 'flex-start', margin: '5%' }}>
                            <TextInput
                                label="Visitee's name"
                                value={visitee}
                                onChangeText={visitee => setVisitee(visitee)}
                                style={{
                                    alignSelf: 'center',
                                    marginBottom: '5%',
                                    height: 60,
                                    width: 300,
                                    alignContent: 'center',
                                    justifyContent: 'center',
                                    fontFamily: 'robotoRegular'
                                }}
                            />
                            <TextInput
                                label="Ward Number"
                                value={ward}
                                onChangeText={ward => setWard(ward)}
                                style={{
                                    alignSelf: 'center',
                                    marginBottom: '5%',
                                    height: 60,
                                    width: 300,
                                    alignContent: 'center',
                                    justifyContent: 'center',
                                    fontFamily: 'robotoRegular'
                                }}
                            />
                            <TextInput
                                label="Visit date"
                                value={date}
                                onChangeText={date => setDate(date)}
                                style={{
                                    marginBottom: '5%',
                                    height: 60,
                                    width: 300,
                                    alignContent: 'center',
                                    justifyContent: 'center',
                                    fontFamily: 'robotoRegular'
                                }}
                            />
                            <DatePicker
                                style={{ width: 200 }}
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
                                        position: 'absolute',
                                        left: 0,
                                        top: 4,
                                        marginLeft: 0
                                    },
                                    dateInput: {
                                        marginLeft: 36
                                    }
                                }}
                                onDateChange={date => setDate(date)}
                            />
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', marginTop: '10%', marginBottom: '5%' }}>
                            <Button
                                mode="contained"
                                onPress={() => {
                                    navigation.navigate('Step 2', {
                                        visitee: visitee,
                                        ward: ward,
                                        date: date
                                    })
                                }}
                                theme={{ roundness: 10 }}
                                style={{
                                    width: 100,
                                    height: 50,
                                    justifyContent: 'center',
                                }}
                                labelStyle={{
                                    fontFamily: 'robotoRegular'
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

export default Book0;