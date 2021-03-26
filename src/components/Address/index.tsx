import React from 'react';
import { View } from 'react-native';
import { AddButton, AddressContent, AddressInfo, Container, ContainerOpenModal, Indicator, Input, Text } from './styles';
import { Ionicons, FontAwesome } from '@expo/vector-icons';

interface AddressProps {
    closeModal: ()=>void;
}

export function Address({ closeModal }: AddressProps) {
    return(
        <Container>
            <ContainerOpenModal>
                <View style={{ alignItems: 'center' }}>
                    <Indicator 
                        onPress={closeModal}
                    />
                </View>

                <Text>
                    Escolha um endereço
                </Text>

                <Input 
                    placeholder="Busque pelo seu CEP"
                />

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                    <Text style={{ fontSize: 13, color: '#666', fontWeight: 'bold' }}>escolha um endereço cadastrado</Text>
                    
                    <AddButton>
                        <Text style={{ fontSize: 14, fontWeight: 'bold', marginTop: 0 }}>adicionar</Text>
                    </AddButton>
                </View>

                <AddressContent>
                    <Ionicons name="person-outline" size={20} color="black" />

                    <AddressInfo>
                        <Text style={{ fontWeight: 'bold', marginTop: 0 }}>João Victor Dias Barroso</Text>
                        <Text style={{ fontSize: 14, color: "#CCC", marginTop: 0 }}>Rua Fulano, 0, Cicrano,</Text>
                        <Text style={{ fontSize: 14, color: "#CCC", marginTop: 0 }}>Beltrano, CE - CEP 78762-653</Text>
                    </AddressInfo>

                    <FontAwesome name="check-circle" size={24} color="blue" />
                </AddressContent>
            </ContainerOpenModal>
        </Container>
    );
}