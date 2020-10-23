import React, { useState,useEffect} from 'react';
import { DefaultTheme, Provider as PaperProvider, Button, RadioButton} from 'react-native-paper';
import { Text, View } from 'react-native';
import {
    getAvailableSessions,
  } from "../../actions/api";
const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
        ...DefaultTheme.colors,
        primary: 'purple',
        accent: 'black',
    },
};

function Book2({ route, navigation }) {
    const { visitee, ward, date } = route.params;
    const [checked, setChecked] = React.useState();
  const [sessions, setSessions] = useState([]);
  useEffect(() => {
    const fetchSession = async () => {
        if (date === "") return;
        const sessionFetch = await getAvailableSessions(date);
        setSessions(sessionFetch);
      };
      fetchSession();
      console.log("SESS",sessions);
  }, []);
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
                        Step 2
                    </Text>
                </View>
                <View style={{ flex: 4, alignItems: 'center', justifyContent: 'flex-start', margin: '5%' }}>

                    {sessions.map((x, i) => (
                        <View style={{ flexDirection: 'row' }} key={i}>
                        <Text>{`Session ${
                                        i + 1
                                      } (${x.session_from.substring(
                                        0,
                                        5
                                      )} - ${x.session_to.substring(0, 5)})`}</Text>
                        <RadioButton
                            value={`Session ${
                                        i + 1
                                      } (${x.session_from.substring(
                                        0,
                                        5
                                      )} - ${x.session_to.substring(0, 5)})`}
                            status={checked === String(x.session_number) ? 'checked' : 'unchecked'}
                            onPress={() => setChecked(String(x.session_number))}
                            uncheckedColor='gray'
                            color='purple'
                        />
                    </View>
                                  ))}
                </View>
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', marginTop: '10%', marginBottom: '5%' }}>
                    <Button
                        mode="contained"
                        onPress={() => { navigation.navigate('Step 1') }}
                        theme={{ roundness: 10 }}
                        style={{
                            width: 100,
                            height: 50,
                            justifyContent: 'center',
                            marginRight: '5%'
                        }}
                    >
                        Back
                    </Button>
                    <Button
                        mode="contained"
                        onPress={() => {
                            navigation.navigate('Step 3', {
                                visitee: visitee,
                                ward: ward,
                                date: date,
                                session: checked
                            })
                        }}
                        theme={{ roundness: 10 }}
                        style={{
                            width: 100,
                            height: 50,
                            justifyContent: 'center',
                        }}
                    >
                        Next
                        </Button>

                </View>
            </View>
        </PaperProvider>
    );
}

export default Book2;