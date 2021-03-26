import React, { useState } from 'react';
import { View } from 'react-native';
import { Address } from '../../components/Address';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';

export function Favorites() {
    const [isOpenModal, setIsOpenModal] = useState(false);
    return (
        <>
            <Header 
                title="Favoritos"
                openModal={()=>setIsOpenModal(true)}

            />
            <View />
            <Footer currentPage="fav"/>
            { isOpenModal && <Address closeModal={()=>setIsOpenModal(false)}/> }
        </>
    );
}