import React, { useState } from 'react';
import { DefaultTheme, Provider as PaperProvider, Button } from 'react-native-paper';
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { connect } from "react-redux";
import {
    getAvailableSessions,
    bookSchedule,
  } from "../../actions/api";
import PropTypes from "prop-types";
const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
        ...DefaultTheme.colors,
        primary: 'purple',
        accent: 'yellow',
    },
};

function Book4({route,userId, name}) {
    const { visitee, ward, date, session } = route.params;
    const navigation2 = useNavigation();
    const bookApi = async () =>
    {
        const dataSent = {
            visitor: name,
            userid: userId,
            visitee: visitee,
            room: String(ward),
            date: date,
            session: String(session),
          };
          console.log(dataSent);
        const res =await bookSchedule(dataSent);
        console.log("RESPOND :",res);

        navigation2.navigate('Book Badge', {
            bookId:res.body
        } )
    }
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
                        Render your digital badge now !
                    </Text>
                    <Text
                        onPress={bookApi}
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

Book4.propTypes = {
    userId: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  };
  
  const mapStateToProps = (state) => ({
    userId: state.auth.attributes.userId,
    name: state.auth.attributes.name,
  });
  
  export default connect(mapStateToProps, {})(Book4);
  