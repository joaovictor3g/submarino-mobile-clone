import React, { useState } from "react";
import { Text } from "react-native";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Container, ContainerOfferItems, LabelAndOffer, OfferItem, ScrollHorizontal } from './styles';
import { MaterialCommunityIcons, Entypo, AntDesign } from '@expo/vector-icons';
import { Address } from "../../components/Address";

export function Highlights() {
    const [isOpenModal, setIsOpenModal] = useState(false);
    return (
        <>
            <Header 
                hasInput
                openModal={()=>setIsOpenModal(true)}
                
            />
            <Container>
                <ScrollHorizontal 
                    horizontal
                    showsHorizontalScrollIndicator={false}
                >
                    <ContainerOfferItems>
                        <LabelAndOffer>
                            <OfferItem>
                                <Text  style={{ fontWeight: 'bold', fontSize: 20, color: "#666" }}>WOW</Text>
                            </OfferItem>

                            <Text style={{ marginTop: 10, fontWeight: 'bold' }}>
                                Ofertas 
                               
                            </Text>
                            <Text style={{ fontWeight: 'bold' }}>
                                WOW 
                               
                            </Text>
                        </LabelAndOffer>

                        <LabelAndOffer>
                            <OfferItem>
                                <MaterialCommunityIcons name="ticket-percent-outline" size={30} color="#666" />
                            </OfferItem>

                            <Text style={{ marginTop: 10, fontWeight: 'bold' }}>Cupons do</Text>
                            <Text style={{ fontWeight: 'bold' }}>Sub </Text>
                        </LabelAndOffer>

                        <LabelAndOffer>
                            <OfferItem>
                                <Entypo name="controller-play" size={30} color="#666" />
                            </OfferItem>

                            <Text style={{ marginTop: 10, fontWeight: 'bold' }}>Sub no ar!</Text>
                        </LabelAndOffer>

                        <LabelAndOffer>
                            <OfferItem>
                                <MaterialCommunityIcons name="egg-easter" size={30} color="#666" />
                            </OfferItem>

                            <Text style={{ marginTop: 10, fontWeight: 'bold' }}>Páscoa</Text>
                        </LabelAndOffer>

                        <LabelAndOffer>
                            <OfferItem>
                                <AntDesign name="hearto" size={30} color="#666" />
                            </OfferItem>

                            <Text style={{ marginTop: 10, fontWeight: 'bold' }}>SubLovers</Text>
                        </LabelAndOffer>

                        <LabelAndOffer>
                            <OfferItem>
                                <MaterialCommunityIcons name="truck-fast-outline" size={30} color="#666" />
                            </OfferItem>

                            <Text style={{ marginTop: 10, fontWeight: 'bold' }}>Receba em</Text>
                            <Text style={{ fontWeight: 'bold' }}>3 horas</Text>
                        </LabelAndOffer>
                    </ContainerOfferItems>

                </ScrollHorizontal>
                
            </Container>
            <Footer currentPage="highlights"/>
            { isOpenModal && <Address closeModal={()=>setIsOpenModal(false)}/> }
        
        </>
    );
}