import React from 'react';
import { Text } from 'react-native';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { SafeArea, ScrollInItems, Button, TextButton, ButtonGroup, VersionContainer, Version, DevelopedBy } from './styles';
import { AntDesign } from '@expo/vector-icons';

interface ButtonParams {
    key: number;
    label: string;
}

export function More() {
    const services: ButtonParams[] = [
        { key: 1, label: "Notificações" },
        { key: 2, label: "Meus pedidos" },
        { key: 3, label: "Cartão Submarino" },
        { key: 4, label: "Submarino Viagens" },
        { key: 5, label: "Meus vales" },
        { key: 6, label: "Mensagens do Sub" },
        { key: 7, label: "Venda com a gente" },
    ];

    const callChatItems: ButtonParams[] = [
        { key: 1, label: "Atendimento por Telefone" },
        { key: 2, label: "Compre pelo Telefone" },
    ];

    const aboutAppItems: ButtonParams[] = [
        { key: 1, label: "Avaliar na App Store" },
        { key: 2, label: "Confira as Regras" },
        { key: 3, label: "Politíca de Privacidade" },
        { key: 4, label: "Guia de segurança" },
        { key: 5, label: "Regras dos Cupons" },
    ]

    return (
        <>
            <Header 
                title="Mais"
                hasAddress={false}
                hasSeparator={false}
                morePage
            />
            <SafeArea>
                <ScrollInItems>
                    <Button firstChild>
                        <TextButton color>
                            joaovictor@gmail.com
                        </TextButton>
                    </Button>
                    

                    <ButtonGroup>
                        <Text style={{
                            marginLeft: '4%',
                            marginBottom: '2%',
                            color: "#999"
                        }}>
                            MINHA CONTA
                        </Text>
                        <Button>
                            <TextButton>
                                Dados pessoais
                            </TextButton>
                        </Button>

                        <Button>
                            <TextButton>
                                Endereços
                            </TextButton>
                        </Button>
                    </ButtonGroup>

                    <ButtonGroup>
                        <Text style={{
                            marginLeft: '4%',
                            marginBottom: '2%',
                            color: "#999"
                        }}>
                            SERVIÇOS
                        </Text>
                        { services.map(service => (
                            <Button key={service.key}>
                                <TextButton>
                                    {service.label}
                                    
                                </TextButton>
                                <AntDesign name="right" size={30} color="#666" style={{fontSize:0, marginRight: '4%'}}/>
                            </Button>
                        )) }

                    </ButtonGroup>

                    <ButtonGroup>
                        <Text style={{
                            marginLeft: '4%',
                            marginBottom: '2%',
                            color: "#999"
                        }}>
                            CENTRAL DE ATENDIMENTO
                        </Text>

                        { callChatItems.map(callChatItem => (
                            <Button key={callChatItem.key}>
                                <TextButton>
                                    {callChatItem.label}
                                </TextButton>
                                <AntDesign name="right" size={30} color="#666" style={{fontSize:0, marginRight: '4%'}}/>
                            </Button>
                        )) }
                    </ButtonGroup>
                    
                    <ButtonGroup>
                        <Text style={{
                            marginLeft: '4%',
                            marginBottom: '2%',
                            color: "#999"
                        }}>
                            SOBRE O APP
                        </Text>

                        { aboutAppItems.map(about => (
                            <Button key={about.key}>
                                <TextButton>
                                    {about.label}
                                </TextButton>
                                <AntDesign name="right" size={30} color="#666" style={{fontSize:0, marginRight: '4%'}}/>
                            </Button>
                        )) }
                    </ButtonGroup>

                    <VersionContainer>
                        <Version>Clone V1.0</Version>
                        <DevelopedBy>
                            Developed by: João Victor
                        </DevelopedBy>
                    </VersionContainer>

                </ScrollInItems>
            </SafeArea>

            <Footer currentPage="more"/>
        </>
    );
}