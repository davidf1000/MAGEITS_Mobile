import React, { useState} from 'react';
import { DefaultTheme, Provider as PaperProvider, Button, RadioButton} from 'react-native-paper';
import { Text, View } from 'react-native';

const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
        ...DefaultTheme.colors,
        primary: 'purple',
        accent: 'black',
    },
};

function Book2({ route, navigation }) {
    const { visitee, ward, date } = route.params;
    const [checked, setChecked] = React.useState();

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
                        Step 2
                    </Text>
                </View>
                <View style={{ flex: 4, alignItems: 'center', justifyContent: 'flex-start', margin: '5%' }}>
                <View style={{ flexDirection: 'row' }}>
                        <Text>Session 1 (08:00-10:00)</Text>
                        <RadioButton
                            value="Session 1 (08:00-10:00)"
                            status={checked === '1' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked('1')}
                            uncheckedColor='red'
                            color='purple'
                        />
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text>Session 2 (13:00-14:00)</Text>
                        <RadioButton
                            value="Session 2 (13:00-14:00)"
                            status={checked === '2' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked('2')}
                            uncheckedColor='gray'
                            color='purple'
                        />
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text>Session 3 (15:00-16:00)</Text>
                        <RadioButton
                            value="Session 3 (15:00-16:00)"
                            status={checked === '3' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked('3')}
                            uncheckedColor='gray'
                            color='purple'
                        />
                    </View>
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
                    >
                        Next
                        </Button>

                </View>
            </View>
        </PaperProvider>
    );
}

export default Book2;