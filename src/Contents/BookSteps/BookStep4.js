import React, { useState } from 'react';
import { DefaultTheme, Provider as PaperProvider, Button } from 'react-native-paper';
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

function Book4({route}) {
    const { visitee, ward, date, session } = route.params;
    const navigation = useNavigation();

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
                        Step 4
                    </Text>
                </View>
                <View style={{ flex: 5, alignItems: 'center', justifyContent: 'flex-start', margin: '5%' }}>
                    <Text
                        style={{
                            fontSize: 15,
                            alignSelf: 'center',
                            margin: '5%'
                        }}>
                        Here's your digital badge link
                    </Text>
                    <Text
                        onPress={() => navigation.navigate('Digital Badge', {
                            visitee: visitee,
                            ward: ward,
                            date: date,
                            session: session
                        } )}
                        style={{
                            textAlign: 'center',
                            fontSize: 15,
                            marginBottom: '30%',
                            color: 'blue'
                        }}
                    >
                        Click here
                    </Text>
                </View>
            </View>
        </PaperProvider>
    );
}

export default Book4;