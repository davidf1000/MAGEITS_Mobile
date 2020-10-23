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

function Register4({ navigation }) {
    const [uploadProfile, setUploadProfile] = React.useState('');
    const [uploadEKTP, setUploadEKTP] = React.useState('');
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
                        Step 4
            </Text>
                </View>
                <View style={{ flex: 4, alignItems: 'center', justifyContent: 'flex-start', margin: '5%' }}>
                    <Text
                        style={{
                            fontSize: 20,
                            alignSelf: 'center',
                        }}>
                        Confirm Your E-mail
                    </Text>
                </View>
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', marginTop: '10%', marginBottom: '5%' }}>
                    <Button
                        mode="contained"
                        onPress={() => { navigation.navigate('Inviso') }}
                        theme={{ roundness: 10 }}
                        style={{
                            width: 100,
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

export default Register4;