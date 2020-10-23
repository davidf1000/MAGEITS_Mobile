import React, { Component,useState,useEffect } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Table, Row } from 'react-native-table-component';
import {getHistory} from '../actions/api';
import { connect } from "react-redux";
import PropTypes from "prop-types";
const History = (
    {
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
        }}
) => {

        const [data,setData] = useState({
            myArray: [],
            tableHead: ['Id', 'Visitee', 'Date', 'Room', 'Ward'],
            widthArr: [20, 120, 100, 40, 40]
        })

    useEffect(()=>{
        fetch('https://5f8e06b64c15c40016a1e554.mockapi.io/api/testtabel/Schedule')
            .then(response => response.json())
            .then(myArray => {
                setData({...data, myArray })
            });
        const fetchHistory= async ()=>{
        // Nanti datanya ganti pake yang ini 
        const res= await getHistory(userId);
        //   setData(res);
        console.log(JSON.stringify(res));

        }
        fetchHistory();
      },[])

   
        return (
            <View style={styles1.container}>
                <View>
                    <Table borderStyle={{ borderWidth: 1, borderColor: 'black' }}>
                        <Row data={data.tableHead} widthArr={data.widthArr} style={styles1.header} textStyle={styles1.text} />
                    </Table>
                    <ScrollView style={styles1.dataWrapper}>
                        <Table borderStyle={{ borderWidth: 1, borderColor: 'black' }}>
                            {
                                data.myArray.map(record => ([record.Id, record.Visitee, record.Date, record.Room, record.Ward])).map((rowData, index) => (
                                    <Row
                                        key={index}
                                        data={rowData}
                                        widthArr={data.widthArr}
                                        style={[styles1.row, index % 2 && { backgroundColor: '#F7F6E7' }]}
                                        textStyle={styles1.text}
                                    />
                                ))
                            }
                        </Table>
                    </ScrollView>
                </View>
            </View>
        )
    
}

const styles1 = StyleSheet.create({
    container: { flex: 1, padding: '2%', justifyContent: 'center', alignItems: 'center' },
    header: { height: 50, backgroundColor: 'purple' },
    text: { textAlign: 'center' },
    dataWrapper: { marginTop: -1 },
    row: { height: 40 }
});


History.propTypes = {
    attributes: PropTypes.object.isRequired,
  };
  
  const mapStateToProps = (state) => ({
    attributes: state.auth.attributes,
  });
  
  export default connect(mapStateToProps, {})(History);
  