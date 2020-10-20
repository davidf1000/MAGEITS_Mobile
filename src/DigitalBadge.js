import React, { Component } from 'react';
import { render } from 'react-dom';
import { View, Text, Image } from 'react-native';
import { DefaultTheme, Provider as PaperProvider, DataTable } from 'react-native-paper';
import { Table, Col } from 'react-native-table-component';

const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
        ...DefaultTheme.colors,
        primary: 'purple',
        accent: 'yellow',
    },
};

function DigitalBadge({ route, navigation }) {
    const { visitee, ward, date, session } = route.params;
    const state = {
        tableHead: ['Visitee', 'Ward', 'Date', 'Session'],
        tableData: [visitee, ward, date, session]
    };
    return (
        <PaperProvider theme={theme} >
            <View
                style={{
                    flex: 1,
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: '5%',
                    marginBottom: '5%',
                    marginLeft: '10%',
                    marginRight: '10%'
                }}
            >
                <View style={{ flex: 1 }}>
                    <Text
                        style={{
                            fontSize: 20,
                            alignSelf: 'center',
                        }}>
                        Digital Badge
                    </Text>
                </View>
                <Image
                    source={require('./img/ProfileImage.png')}
                    style={{
                        height: '35%',
                        width: '40%',
                        borderRadius: 400 / 2,
                        overflow: 'hidden',
                        borderColor: 'black',
                        borderWidth: 1,
                        flex: 2,
                        padding: '5%'
                    }}
                />
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text
                        style={{
                            fontSize: 15,
                            alignSelf: 'center',
                        }}>
                        LMAO
                    </Text>
                </View>
                <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center', padding: '5%' }}>
                    <Table borderStyle={{ borderWidth: 2, borderColor: 'purple' }} style={{ flexDirection: 'row', width: 300 }}>
                        <Col data={state.tableHead} textStyle={{ margin: 6, textAlign: 'left' }} heightArr={[30, 30, 30, 30, 30]} />
                        <Col data={state.tableData} textStyle={{ margin: 6, textAlign: 'right' }} heightArr={[30, 30, 30, 30, 30]} />
                    </Table>
                </View>
                <Image
                    source={require('./img/QRExample.png')}
                    style={{
                        borderColor: 'black',
                        borderWidth: 3,
                        flex: 4,
                        padding: '10%',
                        marginTop: '5%'
                    }}
                />
            </View>
        </PaperProvider>
    );
}


export default DigitalBadge;