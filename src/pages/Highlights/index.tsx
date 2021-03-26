import React from "react";
import { Text } from "react-native";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Container } from './styles';

export function Highlights() {
    return (
        <>
            <Header 
                hasInput
            />
            <Container>
                
            </Container>
            <Footer currentPage="highlights"/>
        </>
    );
}