import React from 'react';
import { HeaderContainer, HeaderText, Input, Separator, AddressContent, Title } from "./styles";
import { Ionicons, AntDesign } from '@expo/vector-icons';

interface HeaderProps {
    title?: string;
    hasInput?:boolean;
};

export function Header({ title, hasInput=false }: HeaderProps) {
    return (
        <HeaderContainer hasMoreContent={title!==undefined && hasInput}>
            { title && <Title>{title}</Title> }
            
            {hasInput && 
                <Input 
                    placeholder="Buscar no Submarino"
                />
            }
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