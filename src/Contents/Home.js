import React, { Component } from "react";
import { Platform, View, Text, Image } from "react-native";
import {} from "react-native-gesture-handler";
import { FontAwesome } from "@expo/vector-icons";
import { CardList } from "react-native-card-list";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import { connect } from "react-redux";
import PropTypes from "prop-types";
const CardNews = ({ title, url, content }) => (
  <Card style={{ marginBottom: 10 }}>
    <Card.Title title={title} subtitle="" />
    <Card.Content></Card.Content>
    <Card.Cover source={{ uri: url }} style={{ height: 125 }} />
    <Paragraph style={{ margin: 15 }}>{content} </Paragraph>
    <Card.Actions>
      <Button>
        <Text style={{ fontSize: 10 }}>Read More..</Text>
      </Button>
    </Card.Actions>
  </Card>
);

const newsCovid = [
  {
    title: "Break News !",
    content:
      "Tambah 3.732, Total Kasus Virus Corona Indonesia Jadi 389.712 per 25 Oktober 2020",
    url:
      "https://ichef.bbci.co.uk/news/640/cpsprodpb/237A/production/_111228090_27eaca61-6851-44df-90ea-0e4cc2fa94d1.jpg",
  },
  {
    title: "Penyebaran Covid-19",
    content:
      "Pemerintah mewaspadai akan timbulnya klaster baru covid-19 di masa liburan akhir Oktober 2020 ini.",
    url:
      "https://www.telegraph.co.uk/content/dam/Travel/2018/August/adults%20iStock-672425798-xlarge.jpg",
  },
];

const newsHospital = [
  {
    title: "Pasien COVID-19 di Kaltim",
    content: "2.806 Pasien COVID-19 di Kaltim Dirawat di Rumah Sakit",
    url:
      "https://cdn.idntimes.com/content-images/post/20200826/whatsapp-image-2020-08-26-at-123933-pm-c8dc7fcd84a55eff57d336c43e1ea259_600x400.jpeg",
  },
  {
    title: "Rumah Sakit Penuh !",
    content:
      "Warga Batam saat ini harus benar-benar bisa menjaga kesehatan, jangan sampai sakit, apalagi sampai harus dirawat di rumah sakit Ya, saat ini semua kapasitas rumah sakit di Batam sudah full, bahkan beberapa rumah sakit melebihi kapasitas, alias over.Mereka yang menguasai rumah sakit saat ini adalah pasien yang terinfeksi virus corona covid 19 Kota Batam. ",
    url:
      "https://batamclick.com/Property/uploads/2020/10/IMG-20201025-WA0023_copy_640x480.jpg",
  },
];
const newsLifestyle = [
  {
    title: "Keluarga Terdampak COVID-19",
    content:
      "Tak hanya orang dewasa, pandemi juga berdampak signifikan pada anak. Oleh karena itu, IKEA Indonesia menggandeng organisai non-profit Save The Children berupaya membantu anak-anak dan keluarga terdampak situasi krisis kesehatan global melalui donasi penjualan produk mainan.",
    url:
      "https://cdn0-production-images-kly.akamaized.net/WjSoNWoFqGpap6vzEKvO4XeJKA4=/640x640/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/3277000/original/090647100_1603522857-Ikea_Indonesia.jpeg",
  },
  {
    title: "Fashion Show",
    content:
      "Fashion show virtual yang ditayangkan secara streaming menjadi salah satu siasat yang dilakukan pelaku industri mode ketika peragaan busana seperti biasanya tak dapat terselenggara karena pandemi Covid-19.",
    url:
      "https://cdn1-production-images-kly.akamaized.net/62blTPKTKGgoFGVcRme8NaUcgN4=/1231x710/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/3277152/original/078273000_1603543307-20201024-Fashion-Show-Di-tengah-Pandemi-FANANI-1.jpg",
  },
];
const cards = [
  {
    id: "0",
    title: "Covid-19 News",
    picture: require("../img/Covid19.png"),
    content: (
      <View>
        {newsCovid.map((x) => (
          <CardNews title={x.title} url={x.url} content={x.content} />
        ))}
      </View>
    ),
  },
  {
    id: "1",
    title: "Hospital News",
    picture: require("../img/hospital.jpg"),
    content:
    <View>
    {newsHospital.map((x) => (
      <CardNews title={x.title} url={x.url} content={x.content} />
    ))}
  </View>
    ,
  },
  {
    id: "2",
    title: "Life Style",
    picture: require("../img/lifestyle.jpg"),
    content: 
    <View>
    {newsLifestyle.map((x) => (
      <CardNews title={x.title} url={x.url} content={x.content} />
    ))}
  </View>
    ,
  },
];

const Home= ({
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
    navigation
}) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <View
        style={{
          alignItems: "center",
          justifyContent: "flex-start",
          flex: 1.9,
          width: "100%",
        }}
      >
        <View
          style={{ flex: 1, backgroundColor: "#5465ff", alignSelf: "stretch" }}
        ></View>
        <View
          style={{
            position: "absolute",
            width: "90%",
            height: "60%",
            marginTop: "8%",
            flexDirection: "column",
            borderRadius: 20,
            backgroundColor: "#fff",
            padding: 5,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.5,
            shadowRadius: 2,
            elevation: 2,
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={{uri:profile}}
              style={{
                width: 60,
                borderRadius: 400 / 2,
                overflow: "hidden",
                borderColor: "black",
                borderWidth: 0.1,
                aspectRatio: 1,
                marginRight: 10,
                marginLeft: 10,
              }}
            />
            <Text
              style={{
                flex: 3,
                textAlign: "left",
                fontFamily: "robotoRegular",
                fontSize: 27,
                marginLeft:10,
                marginTop:7
              }}
            >
              Welcome,{'\n               '} {name}
            </Text>
            <Image
              source={require('../img/logo.png')}
              style={{
                width: 30,
                overflow: "hidden",
                aspectRatio: 1,
                marginRight: 10,
                marginLeft: 10,
              }}
            />
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <FontAwesome name="qrcode" size={36} color="#5465ff" />
              </View>
              <View style={{ flex: 1, flexDirection: "column" }}>
                <Text
                  style={{
                    fontFamily: "robotoBold",
                    fontSize: 25,
                    textAlign: "left",
                  }}
                >
                  34
                </Text>
                <Text
                  style={{
                    fontFamily: "robotoBold",
                    fontSize: 10,
                    textAlign: "left",
                  }}
                >
                  Books made
                </Text>
              </View>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <FontAwesome name="hospital-o" size={36} color="#5465ff" /> 
              </View>
              <View style={{ flex: 1, flexDirection: "column" }}>
                <Text
                  style={{
                    fontFamily: "robotoBold",
                    fontSize: 25,
                    textAlign: "left",
                  }}
                >
                  3
                </Text>
                <Text
                  style={{
                    fontFamily: "robotoBold",
                    fontSize: 10,
                    textAlign: "left",
                  }}
                >
                  Hospital Visited
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{ flex: 1, alignSelf: "flex-start" }}>
          <Text
            style={{
              fontFamily: "robotoBold",
              textAlignVertical: "bottom",
              marginTop: 50,
              flex: 1,
              fontSize: 20,
              paddingTop: 20,
            }}
          >
            Your latest visit
          </Text>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#5465ff",
          width: "100%",
          paddingBottom: "3%",
          paddingTop: "1%",
        }}
      >
        <View
          style={{
            width: "90%",
            flex: 1,
            marginTop: "2%",
            flexDirection: "row",
            borderRadius: 20,
            backgroundColor: "#fff",
            padding: 5,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.5,
            shadowRadius: 2,
            elevation: 2,
          }}
        >
          <Text
            style={{
              fontFamily: "robotoBold",
              fontSize: 18,
              textAlign: "center",
              flex: 7,
            }}
          >
            Joni, 25 Oktober 2020
          </Text>
          <Text
            style={{
              color: "#ff7f50",
              textAlign: "center",
              flex: 3,
              fontFamily: "robotoBold",
              fontSize:20
            }}
          >
            View
          </Text>
        </View>
        <View
          style={{
            width: "90%",
            flex: 1,
            marginTop: "2%",
            flexDirection: "row",
            borderRadius: 20,
            backgroundColor: "#fff",
            padding: 5,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.5,
            shadowRadius: 2,
            elevation: 2,
          }}
        >
          <Text
            style={{
              fontFamily: "robotoBold",
              fontSize: 18,
              textAlign: "center",
              flex: 7,
            }}
          >
            Budi, 23 Oktober 2020
          </Text>
          <Text
            style={{
              color: "#ff7f50",
              textAlign: "center",
              flex: 3,
              fontFamily: "robotoBold",
              fontSize:20

            }}
          >
            View
          </Text>
        </View>
        <View
          style={{
            width: "90%",
            flex: 1,
            marginTop: "2%",
            flexDirection: "row",
            borderRadius: 20,
            backgroundColor: "#fff",
            padding: 5,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.5,
            shadowRadius: 2,
            elevation: 2,
          }}
        >
          <Text
            style={{
              fontFamily: "robotoBold",
              fontSize: 18,
              textAlign: "center",
              flex: 7,
            }}
          >
            Toni, 20 Oktober 2020
          </Text>
          <Text
            style={{
              color: "#ff7f50",
              textAlign: "center",
              flex: 3,
              fontFamily: "robotoBold",
              fontSize:20

            }}
          >
            View
          </Text>
        </View>
      </View>
      <View
        style={{
          flex: 0.5,
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Button
          mode="contained"
          onPress={() => {
            navigation.navigate("Book");
          }}
          theme={{ roundness: 10 }}
          style={{
            width: 150,
            height: 40,
            justifyContent: "center",
            marginTop: "5%",
          }}
          labelStyle={{
            fontFamily: "robotoRegular",
            fontSize: 18,
          }}
        >
          Book Now
        </Button>
        <View style={{ alignSelf: "flex-start" }}>
          <Text
            style={{
              fontFamily: "robotoBold",
              textAlignVertical: "bottom",
              fontSize: 20,
            }}
          >
            News
          </Text>
        </View>
      </View>
      <View
        style={{
          flex: 2.2,
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <View
          style={{
            backgroundColor: "#fff",
            flex: 1,
            marginTop: "4%",
            width: "100%",
          }}
        >
          <CardList cards={cards} />
        </View>
      </View>
    </View>
  );
}

Home.propTypes = {
    attributes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    attributes: state.auth.attributes,
});

export default connect(mapStateToProps, {})(Home);
