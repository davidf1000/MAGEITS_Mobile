import React, { useState } from 'react';
import { DefaultTheme, Provider as PaperProvider, BottomNavigation, Text } from 'react-native-paper';
import Profile from './Contents/Profile';
import Book from './Contents/Book';
import History from './Contents/History';

const ProfileRoute = () => <Profile />;

const BookRoute = () => <Book />;

const HistoryRoute = () => <History />;

const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
        ...DefaultTheme.colors,
        primary: 'purple',
        accent: 'yellow',
    },
};

function HomePage({ navigation }) {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'profile', title: 'Profile', icon: 'account' },
        { key: 'book', title: 'Book', icon: 'book' },
        { key: 'history', title: 'History', icon: 'history' },
    ]);


    const renderScene = BottomNavigation.SceneMap({
        profile: ProfileRoute,
        book: BookRoute,
        history: HistoryRoute,
    });

    return (
        <PaperProvider theme={theme}>
            <BottomNavigation
                navigationState={{ index, routes }}
                onIndexChange={setIndex}
                renderScene={renderScene}
            />
        </PaperProvider>
    );
}

export default HomePage;