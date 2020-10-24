import React, { useState,useEffect} from 'react';
import { render } from 'react-dom';
import { View, Text, Image } from 'react-native';
import { DefaultTheme, Provider as PaperProvider, DataTable } from 'react-native-paper';
import { Table, Col } from 'react-native-table-component';
import QRCode from 'react-native-qrcode-svg';
import { getBookId } from "../actions/api";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
        ...DefaultTheme.colors,
        primary: '#4b6ed6',
        accent: 'purple',
    },
};

const HistoryBadge= ({ route,profile })=> {
    const { bookId } = route.params;
    const [form, setForm] = useState({visitee:'',room:'',date:'',session:''});
    const state = {
        tableHead: ['Visitee', 'Ward', 'Date', 'Session'],
        tableData: [form.visitee ? form.visitee: '', form.room ? form.room : '', form.date ? form.date : '', form.session ? form.session : '']
    };
    const fetchBook = async () => {
        const res = await getBookId(bookId);
        console.log("RES",res);
        setForm(res);
      };
      useEffect(() => {
        fetchBook();
      }, []);
    

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
                            fontFamily: 'robotoRegular'
                        }}>
                        Digital Badge
                    </Text>
                </View>
                <Image
                    source={{uri:profile}}
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
                            fontFamily: 'robotoRegular'
                        }}>
                        LMAO
                    </Text>
                </View>
                <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center', padding: '5%' }}>
                    {
                        <Table borderStyle={{ borderWidth: 2, borderColor: 'purple' }} style={{ flexDirection: 'row', width: 300 }}>
                        <Col data={state.tableHead} textStyle={{ margin: 6, textAlign: 'left', fontFamily: 'robotoRegular' }} heightArr={[30, 30, 30, 30, 30]} />
                        <Col data={state.tableData} textStyle={{ margin: 6, textAlign: 'right', fontFamily: 'robotoRegular' }} heightArr={[30, 30, 30, 30, 30]} />
                    </Table>}
                </View>

                    <QRCode
      value="http://awesome.link.qr"
    />
            </View>
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