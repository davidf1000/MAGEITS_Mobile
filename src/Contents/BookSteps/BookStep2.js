import React, { useState, useEffect } from 'react';
import { DefaultTheme, Provider as PaperProvider, Button, RadioButton } from 'react-native-paper';
import { Text, View, Dimensions } from 'react-native';
import {
    getAvailableSessions,
} from "../../actions/api";
import StepIndicator from 'react-native-step-indicator';

const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
        ...DefaultTheme.colors,
        primary: '#4b6ed6',
        accent: 'black',
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

function Book2({ route, navigation }) {
    const { visitee, ward, date } = route.params;
    const [checked, setChecked] = React.useState();
    const [sessions, setSessions] = useState([]);
    useEffect(() => {
        const fetchSession = async () => {
            if (date === "") return;
            const sessionFetch = await getAvailableSessions(date);
            setSessions(sessionFetch);
        };
        fetchSession();
        console.log("SESS", sessions);
    }, []);
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
                                currentPosition={1}
                                labels={labels}
                                stepCount={4}
                            />
                        </View>
                    </View>
                </View> 
                <View style={{ flex: 4, alignItems: 'center', justifyContent: 'flex-start', margin: '5%' }}>
                    {sessions.map((x, i) => (
                        <View style={{ flexDirection: 'row' }} key={i}>
                            <Text style={{ fontFamily: 'robotoRegular' }}>{`Session ${i + 1
                                } (${x.session_from.substring(
                                    0,
                                    5
                                )} - ${x.session_to.substring(0, 5)})`}</Text>
                            <RadioButton
                                value={`Session ${i + 1
                                    } (${x.session_from.substring(
                                        0,
                                        5
                                    )} - ${x.session_to.substring(0, 5)})`}
                                status={checked === String(x.session_number) ? 'checked' : 'unchecked'}
                                onPress={() => setChecked(String(x.session_number))}
                                uncheckedColor='gray'
                                color='#4b6ed6'
                            />
                        </View>
                    ))}
                </View>
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', marginTop: '10%', marginBottom: '5%' }}>
                    <Button
                        mode="contained"
                        onPress={() => { navigation.navigate('Step 1') }}
                        theme={{ roundness: 10 }}
                        style={{
                            width: 100,
                            height: 50,
                            justifyContent: 'center',
                            marginRight: '5%'
                        }}
                        labelStyle={{
                            fontFamily: 'robotoRegular'
                        }}
                    >
                        Back
                    </Button>
                    <Button
                        mode="contained"
                        onPress={() => {
                            navigation.navigate('Step 3', {
                                visitee: visitee,
                                ward: ward,
                                date: date,
                                session: checked
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
        </PaperProvider>
    );
}

export default Book2;