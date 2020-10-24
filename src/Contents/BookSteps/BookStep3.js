import React, { useState } from 'react';
import { DefaultTheme, Provider as PaperProvider, Button } from 'react-native-paper';
import { Text, View } from 'react-native';
import { Table, Col } from 'react-native-table-component';

const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
        ...DefaultTheme.colors,
        primary: '#4b6ed6',
        accent: 'yellow',
    },
};

function Book3({ route, navigation }) {
    const { visitee, ward, date, session } = route.params;
    const state = {
        tableHead: ['Visitee', 'Ward', 'Date', 'Session'],
        tableData: [visitee, ward, date, session]
    };

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
                            fontFamily: 'robotoRegular'
                        }}>
                        Book a Visit
                    </Text>
                    <View style={{ flex:1, padding: 2, alignItems:'center', flexDirection:'row', width:'80%', marginBottom: '5%', borderRadius: 20, borderColor:'black', borderWidth: 2, overflow: 'hidden'}}>
                        <View style={{flex: 3, backgroundColor: '#4b6ed6', aspectRatio:2 }} />
                        <View style={{flex: 1, aspectRatio:2}} />
                    </View>
                    <Text
                        style={{
                            fontSize: 20,
                            alignSelf: 'center',
                            marginBottom: '20%',
                            fontFamily: 'robotoRegular'
                        }}>
                        Step 3
                    </Text>
                </View>
                <View style={{ flex: 4, alignItems: 'center', justifyContent: 'flex-start', margin: '5%' }}>
                    <Table borderStyle={{ borderWidth: 2, borderColor: '#4b6ed6' }} style={{ flexDirection: 'row', width: 300 }}>
                        <Col data={state.tableHead} textStyle={{ margin: 6, textAlign: 'left', fontFamily: 'robotoRegular' }} heightArr={[30, 30, 30, 30, 30]} />
                        <Col data={state.tableData} textStyle={{ margin: 6, textAlign: 'right', fontFamily: 'robotoRegular' }} heightArr={[30, 30, 30, 30, 30]} />
                    </Table>
                </View>
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', marginTop: '10%', marginBottom: '5%' }}>
                    <Button
                        mode="contained"
                        onPress={() => { navigation.navigate('Step 2') }}
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
                            navigation.navigate('Step 4', {
                                visitee: visitee,
                                ward: ward,
                                date: date,
                                session: session
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
                        Book
                        </Button>

                </View>
            </View>
        </PaperProvider>
    );
}

export default Book3;