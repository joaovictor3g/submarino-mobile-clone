import React from 'react';
import { View } from 'react-native';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';

export function Cart() {
    return (
        <>
            <Header />
            <View />
            <Footer currentPage="cart"/>
        </>
    );
}