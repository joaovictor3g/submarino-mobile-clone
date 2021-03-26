import React from 'react';
import { HeaderContainer, HeaderText, Input, Separator, AddressContent } from "./styles";
import { Ionicons, AntDesign } from '@expo/vector-icons';


export function Header() {
    return (
        <HeaderContainer>
            <Input 
                placeholder="Buscar no Submarino"
            />
            <Separator />
            <AddressContent>
                <Ionicons name="location-outline" size={24} color="#fff" />
                
                <HeaderText>
                    Rua Campo Verde, Paraipaba, CE
                </HeaderText>
                <AntDesign name="down" size={24} color="#fff" />
            </AddressContent>
            
            
        </HeaderContainer>
    );
}