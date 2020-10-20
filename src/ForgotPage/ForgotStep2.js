import React, { useState } from 'react';
import { DefaultTheme, Provider as PaperProvider, Button, TextInput } from 'react-native-paper';
import { Text, View } from 'react-native';

const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
        ...DefaultTheme.colors,
        primary: 'purple',
        accent: 'yellow',
    },
};

function Forgot2({ navigation }) {
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
                        Forgot Passworrd
            </Text>
                </View>
                <View style={{ flex: 4, alignItems: 'center', justifyContent: 'flex-start', margin: '5%' }}>
                    <Text
                        style={{
                            fontSize: 20,
                            alignSelf: 'center',
                        }}>
                        Thank you
                    </Text>
                    <Text
                        style={{
                            fontSize: 20,
                            alignSelf: 'center',
                        }}>
                        Please check your E-mail
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