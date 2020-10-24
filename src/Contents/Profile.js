import React, { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';
import { DefaultTheme, Provider as PaperProvider, DataTable } from 'react-native-paper';
import { Table, Col } from 'react-native-table-component';
import { connect } from "react-redux";
import PropTypes from "prop-types";

const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
        ...DefaultTheme.colors,
        primary: '#4b6ed6',
        accent: 'yellow',
    },
};



const Profile = ({
    match,
    attributes: {
        userId,
        address,
        birthdate,
        phone,
        gender,
        admin,
        profile,
        name,
        email,
        ektp,
    } }) => {
    const [data, setData] = useState({
        tableHead: ['Email', 'DoB', 'Gender', 'Address', 'Phone'],
        tableData: [email, birthdate, gender, address, phone]
    });
    return (
        <PaperProvider theme={theme} >
            <View style={{ flex: 1, backgroundColor: '#4b6ed6', paddingTop: 10, paddingLeft: 1, paddingRight: 1, paddingBottom: 10 }}>
                <View
                    style={{
                        flex: 1,
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: '5%',
                        marginBottom: '2%',
                        marginLeft: '5%',
                        marginRight: '5%',
                        borderRadius: 20,
                        backgroundColor: '#fff',
                        padding: 5,
                        shadowColor: '#000',
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.5,
                        shadowRadius: 2,
                        elevation: 2,
                    }}
                >
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <Text
                            style={{
                                fontSize: 20,
                                alignSelf: 'center',
                                fontFamily: 'robotoRegular'
                            }}>
                            Visitor Profile
                        </Text>
                    </View>
                    <Image
                        source={{ uri: profile }}
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
                                fontFamily: 'robotoRegular'
                            }}>
                            {name && name}
                        </Text>
                    </View>
                    <View
                        style={{
                            flex: 3,
                            alignItems: 'center',
                            justifyContent: 'center',
                            shadowColor: '#000',
                            shadowOffset: { width: 0, height: 2 },
                            shadowOpacity: 0.2,
                            shadowRadius: 2,
                            elevation: 2,
                        }}>
                        <Table
                            borderStyle={{
                                borderWidth: 1,
                                borderColor: '#4b6ed6',
                            }}
                            style={{
                                flexDirection: 'row',
                                width: '85%',
                            }}>
                            <Col data={data.tableHead} textStyle={{ margin: 6, textAlign: 'left', fontFamily: 'robotoRegular' }} heightArr={[30, 30, 30, 30, 30]} />
                            <Col data={data.tableData} textStyle={{ margin: 6, textAlign: 'right', fontFamily: 'robotoRegular' }} heightArr={[30, 30, 30, 30, 30]} />
                        </Table>
                    </View>
                    <Image
                        source={{ uri: ektp }}
                        style={{
                            height: '40%',
                            width: '75%',
                            borderColor: 'black',
                            borderWidth: 3,
                            flex: 3,
                            marginTop: '5%',
                            marginBottom: '3%',
                            borderRadius: 20,
                        }}
                    />
                </View>
            </View>
        </PaperProvider>
    )
}

Profile.propTypes = {
    attributes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    attributes: state.auth.attributes,
});

export default connect(mapStateToProps, {})(Profile);
