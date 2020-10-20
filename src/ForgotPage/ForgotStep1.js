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

function Forgot1({ navigation }) {
    const [email, setEmail] = React.useState('');
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
                        Forgot Password
            </Text>
                </View>
                <View style={{ flex: 4, alignItems: 'center', justifyContent: 'flex-start', margin: '5%' }}>
                    <TextInput
                        label="Email"
                        value={email}
                        onChangeText={email => setEmail(email)}
                        style={{
                            alignSelf: 'center',
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
                        onPress={() => { navigation.navigate('Step 2') }}
                        theme={{ roundness: 10 }}
                        style={{
                            width: 300,
                            height: 50,
                            justifyContent: 'center',
                        }}
                    >
                        Send Confirmation Code
                        </Button>

                </View>
            </View>
        </PaperProvider>
    );
}

export default Forgot1;