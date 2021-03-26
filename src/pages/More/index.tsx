import React from 'react';
import { View } from 'react-native';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';

export function More() {
    return (
        <>
            <Header title="Mais"/>
            <View />
            <Footer currentPage="more"/>
        </>
    );
}