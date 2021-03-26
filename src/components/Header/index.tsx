import React, { useState } from 'react';
import { HeaderContainer, HeaderText, Input, Separator, AddressContent, Title } from "./styles";
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { View } from 'react-native';

interface HeaderProps {
    title?: string;
    hasInput?:boolean;
    hasAddress?:boolean;
    hasSeparator?:boolean;
    morePage?:boolean;
    openModal?:()=>void;
    isOpenModal?:boolean;
};

export function Header({ title, hasInput=false, hasAddress=true, hasSeparator=true, morePage=false, openModal }: HeaderProps) {
    
    
    return (
        <HeaderContainer morePage={morePage} hasMoreContent={title!==undefined && hasInput && hasSeparator}>
            { title && <Title>{title}</Title> }
            
            {hasInput && 
                <View style={{ paddingLeft: '5%', paddingRight: '5%' }}>
                    <Input 
                        placeholder="Buscar no Submarino"

                    />
                </View>
            }
           { hasSeparator && <Separator />}
            {hasAddress &&
                <AddressContent onPress={openModal}>
                    <Ionicons name="location-outline" size={24} color="#fff" />

                    <HeaderText>
                        Rua Campo Verde, Paraipaba, CE
                    </HeaderText>
                    <AntDesign name="down" size={24} color="#fff" />
                </AddressContent>}
            
            
        </HeaderContainer>
    );
}