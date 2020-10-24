import React, { Component, useState, useEffect } from "react";
import { Text, StyleSheet, View, ScrollView,TouchableOpacity,ActivityIndicator } from "react-native";
import { Table, Row } from "react-native-table-component";
import { getHistory } from "../../actions/api";
import { connect } from "react-redux";
import PropTypes from "prop-types";


const dateFormatter = (date)=>{
  return date.substring(0,4)+'-'+date.substring(5,7)+'-'+date.substring(8,10);
}

const History = ({
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
  },
  navigation,
}) => {
  const [loaded,setLoaded]= useState(false);
  const [data, setData] = useState({
    myArray: [],
    tableHead: ["Date", "Session", "Badge"],
    widthArr: [105, 90, 150],
  });

  useEffect(() => {
    // fetch('https://5f8e06b64c15c40016a1e554.mockapi.io/api/testtabel/Schedule')
    //     .then(response => response.json())
    //     .then(myArray => {
    //         setData({...data, myArray })
    //     });
    const fetchHistory = async () => {
      // Nanti datanya ganti pake yang ini
      const res = await getHistory(userId);
      //   setData(res);
      const resNew = res.map((x) => ({
        ...x,
        checkin: x.checkin ? "Yes" : "No",
      }));
      console.log(resNew);
      setData({ ...data, myArray: resNew });
      setLoaded(true);
    };
    fetchHistory();
  }, []);
  const bookApi = async () => {
    const dataSent = {
      visitor: name,
      userid: userId,
      visitee: visitee,
      room: String(ward),
      date: date,
      session: String(session),
    };
    console.log(dataSent);
    const res = await bookSchedule(dataSent);
    console.log("RESPOND :", res);
  };
  // Buat pindah ke link
  const onLinkClick = async (x) => {
    console.log("harusnya ini id :",x ); 
    navigation.navigate("Loading Badge", {
      bookId: x,
    });
  };

  const renderButton = (data)=>
        (
        <TouchableOpacity onPress={() => onLinkClick(data)}>
        <View style={{marginLeft: 25, width: 100, height: 25, backgroundColor: '#1CC88A',  borderRadius: 2, justifyContent:'center'}}>
          <Text style={{textAlign: 'center', color: '#fff', fontFamily: 'robotoRegular'}}>Click Here</Text>
        </View>
      </TouchableOpacity>
      )
  ;
  

  return (
    <View style={styles1.container}>
      <View>
      <Text
                        style={{
                            fontSize: 30,
                            alignSelf: 'center',
                            marginTop: '20%',
                            marginBottom: 20,
                            fontFamily: 'robotoRegular',
                        }}>
                        History
                    </Text>
                    { loaded ? <View>
        <Table borderStyle={{ borderWidth: 1, borderColor: "black" }}>
          <Row
            data={data.tableHead}
            widthArr={data.widthArr}
            style={styles1.header}
            textStyle={{...styles1.text,color:'white',fontSize:20}}
          />
        </Table>
        <ScrollView style={styles1.dataWrapper}>
          <Table borderStyle={{ borderWidth: 1, borderColor: "black" }}>
            {data.myArray
              .map((record) => [
                dateFormatter(String(record.date)),
                record.session,
                renderButton(record.id),
              ])
              .map((rowData, index) => (
                <Row
                  key={index}
                  data={rowData}
                  widthArr={data.widthArr}
                  style={[
                    styles1.row,
                    index % 2 && { backgroundColor: "#F7F6E7" },
                  ]}
                  textStyle={styles1.text}
                />
              ))}
          </Table>
        </ScrollView>
        </View> : 
        <ActivityIndicator style={{marginTop:10}} size="large" color="#4b6ed6" />
        }
      </View>
    </View>
  );
};

const styles1 = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: "10%",
    padding: '2%',
    justifyContent: "center",
    alignItems: "center",
  },
  header: { height: 50, backgroundColor: "#4b6ed6", fontFamily: 'robotoRegular' },
  text: { textAlign: "center", fontFamily: 'robotoRegular',fontSize:16 },
  dataWrapper: { marginTop: -1 },
  row: { height: 40 },
});

History.propTypes = {
  attributes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  attributes: state.auth.attributes,
});

export default connect(mapStateToProps, {})(History);
