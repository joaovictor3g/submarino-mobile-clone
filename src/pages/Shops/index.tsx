import React from 'react';
import { View } from 'react-native';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';

export function Shops() {
    return (
        <>
            <Header 
                title="Navegue pelas lojas"
                hasInput    
            />
            <View />
            <Footer currentPage="shops"/>
        </>
    );
}