import React, { Component } from 'react';
import { render } from 'react-dom';
import { View, Text, Image } from 'react-native';
import { DefaultTheme, Provider as PaperProvider, DataTable } from 'react-native-paper';
import { Table, Col} from 'react-native-table-component';

const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
        ...DefaultTheme.colors,
        primary: 'purple',
        accent: 'yellow',
    },
};



export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tableHead: ['Email', 'DoB', 'Gender', 'Address', 'Phone'],
            tableData: ['test@mail.com', '20-10-10', 'M', 'Jalan JKT', '0877843723']
        };
    }
    render() {
        const state = this.state

        return (
            <PaperProvider theme={theme} >
                <View 
                style={{ 
                    flex: 1, 
                    flexDirection: 'column', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    marginTop: '2%', 
                    marginBottom: '2%',  
                    marginLeft: '10%',  
                    marginRight: '10%' }}
                    >
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <Text
                        style={{
                            fontSize: 20,
                            alignSelf: 'center',
                        }}>
                            Visitor Profile
                        </Text>
                    </View>
                    <Image
                        source={require('../img/ProfileImage.png')}
                        style={{
                            height: '40%',
                            width: '50%',
                            borderRadius: 400 / 2,
                            overflow: 'hidden',
                            borderColor: 'black',
                            borderWidth: 1,
                            flex: 3 
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
                    <View style={{ flex: 3, alignItems: 'center', justifyContent: 'center' }}>
                        <Table borderStyle={{ borderWidth: 2, borderColor: 'purple' }} style={{ flexDirection: 'row', width: 300 }}>
                            <Col data={state.tableHead} textStyle={{ margin: 6, textAlign: 'left' }} heightArr={[30, 30, 30, 30, 30]} />
                            <Col data={state.tableData} textStyle={{ margin: 6, textAlign: 'right' }} heightArr={[30, 30, 30, 30, 30]} />
                        </Table>
                    </View>
                    <Image
                        source={require('../img/contohKTP.png')}
                        style={{
                            borderColor: 'black',
                            borderWidth: 3,
                            flex: 3,
                            marginTop: '5%'
                        }}
                    />
                </View>
            </PaperProvider>
        );
    }
}
