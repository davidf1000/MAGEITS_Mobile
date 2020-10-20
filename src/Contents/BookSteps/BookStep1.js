import React, { useState } from 'react';
import { DefaultTheme, Provider as PaperProvider, Button, TextInput } from 'react-native-paper';
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
        ...DefaultTheme.colors,
        primary: 'purple',
        accent: 'yellow',
    },
};

function Book1({naviagation}) {
    const navigation = useNavigation();
    const [visitee, setVisitee] = React.useState('');
    const [ward, setWard] = React.useState('');
    const [date, setDate] = React.useState('');
    return (
        <PaperProvider theme={theme}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center', margin: '5%' }}>
                    <Text
                        style={{
                            fontSize: 30,
                            alignSelf: 'center',
                            margin: '5%'
                        }}>
                        Book a Visit
                    </Text>
                    <Text
                        style={{
                            fontSize: 20,
                            alignSelf: 'center',
                            marginBottom: '20%'
                        }}>
                        Step 1
            </Text>
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
                            justifyContent: 'center'
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
                            justifyContent: 'center'
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
                            justifyContent: 'center'
                        }}
                    />
                </View>
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', marginTop: '10%', marginBottom: '5%' }}>
                    <Button
                        mode="contained"
                        onPress={() => { navigation.navigate('Step 2',{
                            visitee: visitee,
                            ward: ward,
                            date: date
                        }) }}
                        theme={{ roundness: 10 }}
                        style={{
                            width: 100,
                            height: 50,
                            justifyContent: 'center',
                        }}
                    >
                        Next
                        </Button>

                </View>
            </View>
        </PaperProvider>
    );
}

export default Book1;