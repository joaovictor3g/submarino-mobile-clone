import React from 'react';
import { View } from 'react-native';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';

export function Favorites() {
    return (
        <>
            <Header />
            <View />
            <Footer currentPage="fav"/>
        </>
    );
}