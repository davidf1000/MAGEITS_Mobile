import React, { useState } from 'react';
import { View, Image, Text } from 'react-native';
import { DefaultTheme, Provider as PaperProvider, Button, TextInput } from 'react-native-paper';

const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
        ...DefaultTheme.colors,
        primary: 'purple',
        accent: 'yellow',
    },
};

function LoginPage({ navigation }) {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    return (
        <PaperProvider theme={theme}>
            <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
                <Image
                    source={require('./img/logo.png')}
                    style={{
                        alignSelf: 'center',
                        margin: 40,
                        height: 150,
                        width: 150
                    }}
                />
                <Text
                    style={{
                        fontSize: 20,
                        alignSelf: 'center',
                        marginBottom: 20
                    }}
                >
                    Welcome Back
                </Text>
                <TextInput
                    label="Email"
                    value={email}
                    onChangeText={email => setEmail(email)}
                    style={{
                        alignSelf: 'center',
                        marginBottom: 20,
                        height: 60,
                        width: 300,
                        alignContent: 'center',
                        justifyContent: 'center'
                    }}
                />
                <TextInput
                    label="Password"
                    value={password}
                    onChangeText={password => setPassword(password)}
                    style={{
                        alignSelf: 'center',
                        marginBottom: 20,
                        height: 60,
                        width: 300,
                        alignContent: 'center',
                        justifyContent: 'center'
                    }}
                    secureTextEntry= {true}
                />
                <Button
                    mode="contained"
                    onPress={() => {navigation.navigate('Home')}}
                    theme={{ roundness: 10 }}
                    style={{
                        alignSelf: 'center',
                        height: 50,
                        width: 200,
                        alignContent: 'center',
                        justifyContent: 'center',
                        marginBottom: 20
                    }}
                >
                    Login
                </Button>
                <Text
                    style={{
                        textAlign: 'center',
                        fontSize: 12,
                        marginBottom: 20
                    }}
                >
                    <Text>Don't have an account ? </Text>
                    <Text
                        onPress={() => navigation.navigate('Register Account')}
                        style={{
                            color: 'blue'
                        }}
                    >
                        Create An Account
                    </Text>
                </Text>
                <Text
                    onPress={() => navigation.navigate('Forgot Password')}
                    style={{
                        textAlign: 'center',
                        fontSize: 12,
                        marginBottom: 20,
                        color: 'blue'
                    }}
                >
                    Forgot Password
                </Text>
            </View>
        </PaperProvider>
    );
}

export default LoginPage;