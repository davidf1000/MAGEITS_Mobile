import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Table, Row } from 'react-native-table-component';

export default class History extends Component {
    constructor(props) {
        super(props);
        this.state = {
            myArray: [],
            tableHead: ['Id', 'Visitee', 'Date', 'Room', 'Ward'],
            widthArr: [20, 120, 100, 40, 40]
        }
    }

    componentDidMount() {
        fetch('https://5f8e06b64c15c40016a1e554.mockapi.io/api/testtabel/Schedule')
            .then(response => response.json())
            .then(myArray => {
                this.setState({ myArray })
            })
    }

    render() {
        const tableData = this.state.myArray.map(record => ([record.Id, record.Visitee, record.Date, record.Room, record.Ward]));
        return (
            <View style={styles1.container}>
                <View>
                    <Table borderStyle={{ borderWidth: 1, borderColor: 'black' }}>
                        <Row data={this.state.tableHead} widthArr={this.state.widthArr} style={styles1.header} textStyle={styles1.text} />
                    </Table>
                    <ScrollView style={styles1.dataWrapper}>
                        <Table borderStyle={{ borderWidth: 1, borderColor: 'black' }}>
                            {
                                tableData.map((rowData, index) => (
                                    <Row
                                        key={index}
                                        data={rowData}
                                        widthArr={this.state.widthArr}
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
}

const styles1 = StyleSheet.create({
    container: { flex: 1, padding: '2%', justifyContent: 'center', alignItems: 'center' },
    header: { height: 50, backgroundColor: 'purple' },
    text: { textAlign: 'center' },
    dataWrapper: { marginTop: -1 },
    row: { height: 40 }
});