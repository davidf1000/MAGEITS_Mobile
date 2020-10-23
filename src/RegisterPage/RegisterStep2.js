import React, { useState } from 'react';
import { DefaultTheme, Provider as PaperProvider, Button, TextInput } from 'react-native-paper';
import { Text, View } from 'react-native';

const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
        ...DefaultTheme.colors,
        primary: '#4b6ed6',
        accent: 'yellow',
    },
};

function Register2({ navigation }) {
    const [fullName, setFullName] = React.useState('');
    const [gender, setGender] = React.useState('');
    const [dateofBirth, setDateofBirth] = React.useState('');
    const [address, setAddress] = React.useState('');
    const [phone, setPhone] = React.useState('');
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
                        Account Registration
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
                <View style={{ flex: 4, alignItems: 'center', justifyContent: 'center', marginBottom: '5%' }}>
                    <TextInput
                        label="Full Name"
                        value={fullName}
                        onChangeText={fullName => setFullName(fullName)}
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
                        label="Gender"
                        value={gender}
                        onChangeText={gender => setGender(gender)}
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
                        label="Date of Birth"
                        value={dateofBirth}
                        onChangeText={dateofBirth => setDateofBirth(dateofBirth)}
                        style={{
                            marginBottom: '5%',
                            height: 60,
                            width: 300,
                            alignContent: 'center',
                            justifyContent: 'center'
                        }}
                    />
                    <TextInput
                        label="Address"
                        value={address}
                        onChangeText={address => setAddress(address)}
                        style={{
                            marginBottom: '5%',
                            height: 60,
                            width: 300,
                            alignContent: 'center',
                            justifyContent: 'center'
                        }}
                    />
                    <TextInput
                        label="Phone"
                        value={phone}
                        onChangeText={phone => setPhone(phone)}
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
                        onPress={() => { navigation.navigate('Step 3') }}
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

export default Register2;