import React, { Component } from 'react';
import { Platform, View, Text, Image } from 'react-native';
import { Button } from 'react-native-paper';
import { } from 'react-native-gesture-handler';
import { FontAwesome } from '@expo/vector-icons';
import { CardList } from 'react-native-card-list';

const cards = [
    {
        id: "0",
        title: "Covid-19 News",
        picture: require('../img/Covid19.png'),
        content: <Text>Covid-19 News</Text>
    },
    {
        id: "1",
        title: "Starry Night",
        picture: require('../img/StarryNight.png'),
        content: <Text>Starry Night</Text>
    },
    {
        id: "2",
        title: "Monster Hunter World",
        picture: require('../img/MHW.png'),
        content: <Text>Monster Hunter World</Text>
    }
]

function Home({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <View style={{
                alignItems: 'center',
                justifyContent: 'flex-start',
                flex: 1.9,
                width: '100%',
            }}>
                <View style={{ flex: 1, backgroundColor: '#4b6ed6', alignSelf: 'stretch' }}></View>
                <View style={{
                    position: 'absolute',
                    width: '90%',
                    height: '60%',
                    marginTop: '8%',
                    flexDirection: 'column',
                    borderRadius: 20,
                    backgroundColor: '#fff',
                    padding: 5,
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.5,
                    shadowRadius: 2,
                    elevation: 2,
                }}>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <Image
                            source={require('../img/logo.png')}
                            style={{
                                width: 60,
                                borderRadius: 400 / 2,
                                overflow: 'hidden',
                                borderColor: 'black',
                                borderWidth: 1,
                                aspectRatio: 1,
                                marginRight: 10,
                                marginLeft: 10,
                            }}
                        />
                        <Text style={{ flex: 3, textAlign: 'center', fontFamily: 'robotoRegular', fontSize: 20 }}>Welcome, John Doe</Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <FontAwesome name="hospital-o" size={36} color="black" />
                            </View>
                            <View style={{ flex: 1, flexDirection: 'column' }}>
                                <Text style={{ fontFamily: 'robotoBold', fontSize: 20, textAlign: 'center' }}>34</Text>
                                <Text style={{ fontFamily: 'robotoBold', fontSize: 10, textAlign: 'center' }}>Books made</Text>
                            </View>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <FontAwesome name="hospital-o" size={36} color="black" />
                            </View>
                            <View style={{ flex: 1, flexDirection: 'column' }}>
                                <Text style={{ fontFamily: 'robotoBold', fontSize: 20, textAlign: 'center' }}>3</Text>
                                <Text style={{ fontFamily: 'robotoBold', fontSize: 10, textAlign: 'center' }}>Hospital Visited</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ flex: 1, alignSelf: 'flex-start' }}>
                    <Text style={{
                        fontFamily: 'robotoBold',
                        textAlignVertical: 'bottom',
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
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#4b6ed6', width: '100%', paddingBottom: '3%', paddingTop: '1%' }}>
                <View style={{
                    width: '90%',
                    flex: 1,
                    marginTop: '2%',
                    flexDirection: 'row',
                    borderRadius: 20,
                    backgroundColor: '#fff',
                    padding: 5,
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.5,
                    shadowRadius: 2,
                    elevation: 2,
                }}>
                    <Text style={{ fontFamily: 'robotoBold', fontSize: 18, textAlign: 'center', flex: 7 }}>
                        Joni, 25 Oktober 2020
                    </Text>
                    <Text style={{ color: '#ff7f50', textAlign: 'center', flex: 3, fontFamily: 'robotoBold' }}>
                        View
                    </Text>
                </View>
                <View style={{
                    width: '90%',
                    flex: 1,
                    marginTop: '2%',
                    flexDirection: 'row',
                    borderRadius: 20,
                    backgroundColor: '#fff',
                    padding: 5,
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.5,
                    shadowRadius: 2,
                    elevation: 2,
                }}>
                    <Text style={{ fontFamily: 'robotoBold', fontSize: 18, textAlign: 'center', flex: 7 }}>
                        Joni, 25 Oktober 2020
                    </Text>
                    <Text style={{ color: '#ff7f50', textAlign: 'center', flex: 3, fontFamily: 'robotoBold' }}>
                        View
                    </Text>
                </View>
                <View style={{
                    width: '90%',
                    flex: 1,
                    marginTop: '2%',
                    flexDirection: 'row',
                    borderRadius: 20,
                    backgroundColor: '#fff',
                    padding: 5,
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.5,
                    shadowRadius: 2,
                    elevation: 2,
                }}>
                    <Text style={{ fontFamily: 'robotoBold', fontSize: 18, textAlign: 'center', flex: 7 }}>
                        Joni, 25 Oktober 2020
                    </Text>
                    <Text style={{ color: '#ff7f50', textAlign: 'center', flex: 3, fontFamily: 'robotoBold' }}>
                        View
                    </Text>
                </View>
            </View>
            <View style={{ flex: 0.5, alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                <Button
                    mode="contained"
                    onPress={() => { navigation.navigate('Book') }}
                    theme={{ roundness: 10 }}
                    style={{
                        width: 130,
                        height: 40,
                        justifyContent: 'center',
                        marginTop: '5%',
                    }}
                    labelStyle={{
                        fontFamily: 'robotoRegular',
                        fontSize: 15
                    }}
                >
                    Book Now
                </Button>
                <View style={{ alignSelf: 'flex-start', }}>
                    <Text style={{
                        fontFamily: 'robotoBold',
                        textAlignVertical: 'bottom',
                        fontSize: 20,
                    }}
                    >
                        News
                    </Text>
                </View>
            </View>
            <View style={{ flex: 2.2, alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                <View style={{ backgroundColor: '#fff', flex: 1, marginTop: '4%', width: '100%' }}>
                    <CardList cards={cards} />
                </View>
            </View>
        </View>
    );
}

export default Home;