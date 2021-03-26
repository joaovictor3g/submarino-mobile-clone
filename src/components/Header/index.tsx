import React from 'react';
import { HeaderContainer, HeaderText, Input, Separator, AddressContent, Title } from "./styles";
import { Ionicons, AntDesign } from '@expo/vector-icons';

interface HeaderProps {
    title?: string;
    hasInput?:boolean;
    hasAddress?:boolean;
    hasSeparator?:boolean;
    morePage?:boolean;
};

export function Header({ title, hasInput=false, hasAddress=true, hasSeparator=true, morePage=false }: HeaderProps) {
    return (
        <HeaderContainer morePage={morePage} hasMoreContent={title!==undefined && hasInput && hasSeparator}>
            { title && <Title>{title}</Title> }
            
            {hasInput && 
                <Input 
                    placeholder="Buscar no Submarino"
                />
            }
           { hasSeparator && <Separator />}
            {hasAddress &&
                <AddressContent>
                <Ionicons name="location-outline" size={24} color="#fff" />
                
                <HeaderText>
                    Rua Campo Verde, Paraipaba, CE
                </HeaderText>
                <AntDesign name="down" size={24} color="#fff" />
            </AddressContent>}
            
            
        </HeaderContainer>
    );
}