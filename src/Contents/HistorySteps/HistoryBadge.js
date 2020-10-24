import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import { View, Text, Image,ActivityIndicator } from 'react-native';
import { DefaultTheme, Provider as PaperProvider,  Button } from 'react-native-paper';
import { Table, Col } from 'react-native-table-component';
import QRCode from 'react-native-qrcode-svg';
import { getBookId } from "../../actions/api";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
        ...DefaultTheme.colors,
        primary: '#4b6ed6',
        accent: 'yellow',
    },
};

const HistoryBadge = ({ route, profile, navigation: { goBack } }) => {
    const [loaded,setLoaded]= useState(false);
    const { bookId } = route.params;
    const [form, setForm] = useState({ visitee: '', room: '', date: '', session: '' });
    const [qr,setQr]= useState("dni12udh17ashd");
    const [visitor,setVisitor]= useState("");

    const state = {
        tableHead: ['Visitee', 'Ward', 'Date', 'Session'],
        tableData: [form.visitee ? form.visitee : '', form.room ? form.room : '', form.date ? form.date : '', form.session ? form.session : '']
    };
    const fetchBook = async () => {
        const res = await getBookId(bookId);
        console.log("RES", res);
        setForm(res);
        setQr(res.id);
        setVisitor(res.visitor);
        setLoaded(true);
    };
    useEffect(() => {
        fetchBook();
    }, []);


    return (
        <PaperProvider theme={theme} >
        {loaded ?
            <View
                style={{
                    flex: 1,
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: '10%',
                    marginBottom: '5%',
                    marginLeft: '10%',
                    marginRight: '10%'
                }}
            >
                <View style={{ flex: 1 }}>
                    <Text
                        style={{
                            fontSize: 25,
                            alignSelf: 'center',
                            fontFamily: 'robotoRegular'
                        }}>
                        Digital Badge
                    </Text>
                </View>
                <Image
                    source={{ uri: profile }}
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
                            fontSize: 25,
                            alignSelf: 'center',
                            fontFamily: 'robotoRegular'
                        }}>
                        {visitor&& visitor}
                    </Text>
                </View>
                <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center', padding: '15%' }}>
                    {
                        <Table borderStyle={{ borderWidth: 2, borderColor: '#4b6ed6' }} style={{ flexDirection: 'row', width: 300 }}>
                            <Col data={state.tableHead} textStyle={{ margin: 6, textAlign: 'left', fontFamily: 'robotoRegular',fontSize:18 }} heightArr={[40,40,40,40,40]} />
                            <Col data={state.tableData} textStyle={{ margin: 6, textAlign: 'right', fontFamily: 'robotoRegular',fontSize:18 }} heightArr={[40,40,40,40,40]} />
                        </Table>}
                </View>

                <QRCode
                    value={qr}
                    size={185}

                />

                <Button mode="contained"
                    onPress={() => {
                        goBack()
                    }}
                    theme={{ roundness: 10 }}
                    style={{
                        width: 100,
                        height: 30,
                        justifyContent: 'center',
                        marginTop:'5%',
                        backgroundColor: '#4b6ed6'
                    }}
                    labelStyle={{
                        fontFamily: 'robotoRegular'
                    }}
                >
                    Back
                </Button>
            </View>:
        <ActivityIndicator style={{marginTop:10}} size="large" color="#4b6ed6" />


        }
        </PaperProvider>
    );
}
HistoryBadge.propTypes = {
    profile: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
    profile: state.auth.attributes.profile,
});

export default connect(mapStateToProps, {})(HistoryBadge);

{/* <Image
                    source={require('./img/QRExample.png')}
                    style={{
                        borderColor: 'black',
                        borderWidth: 3,
                        flex: 4,
                        padding: '10%',
                        marginTop: '5%'
                    }}
                /> */}