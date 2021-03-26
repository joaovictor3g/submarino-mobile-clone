import React from 'react';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Container, Item, Content, Text, Scroll, Image, BorderImage } from './styles';
import { AntDesign } from '@expo/vector-icons';

export function Shops() {
    return (
        <>
            <Header 
                title="Navegue pelas lojas"
                hasInput    
            />

            <Container>

                <Scroll>
                    <Content>
                        <Text style={{ margin: '2%', width: "100%" }}>
                            Compre por departamento
                        </Text>
                        <Item>
                            <Text style={{ fontSize: 16 }}>Livros</Text>

                            <BorderImage>
                                <Image source={require('../../assets/image-shop-1.jpeg')} resizeMode="contain"/> 
                            </BorderImage>                                
                        </Item>

                        <Item>
                            <Text style={{ fontSize: 16 }}>Games e PC Gamer</Text>

                            <BorderImage>       
                                <Image source={require('../../assets/image-shop-2.jpeg')} resizeMode="contain"/>
                            </BorderImage>
                        </Item>

                        <Item>
                            <Text style={{ fontSize: 16 }}>Eletrodomésticos e Casa</Text>

                            <BorderImage>
                                <Image source={require('../../assets/image-shop-3.png')} resizeMode="contain"/>
                            </BorderImage>
                        </Item>

                        <Item>
                            <Text style={{ fontSize: 16 }}>Celulares</Text>
                            <BorderImage>
                                <Image source={require('../../assets/image-shop-phone.png')} resizeMode="contain"/>
                            </BorderImage>
                        </Item>

                        <Item>
                            <Text style={{ fontSize: 16 }}>TV, áudio e home Theater</Text>
                            <BorderImage>
                                <Image source={require('../../assets/image-shop-tv.png')} resizeMode="contain"/>
                            </BorderImage>
                        </Item>

                        <Item>
                            <Text style={{ fontSize: 16 }}>Informática</Text>
                            <BorderImage>
                                <Image source={require('../../assets/image-shop-6.png')} resizeMode="contain"/>
                            </BorderImage>
                        </Item>

                        <Item>
                            <Text style={{ fontSize: 16 }}>Moda</Text>
                            <BorderImage>
                                <Image source={require('../../assets/image-shop-7.png')} resizeMode="contain" />
                            </BorderImage>
                        </Item>

                        <Item>
                            <Text style={{ fontSize: 16 }}>Esportes e Suplementos</Text>
                            <BorderImage>
                            <Image source={require('../../assets/image-shop-8.png')} resizeMode="contain"/>
                            </BorderImage>
                        </Item>

                        <Item>
                            <Text style={{ fontSize: 16 }}>Móveis e decoração</Text>
                            <BorderImage>
                            <Image source={require('../../assets/image-shop-9.png')} resizeMode="contain"/>
                            </BorderImage>
                        </Item>

                        <Item>
                            <Text style={{ fontSize: 16 }}>Beleza e Perfumaria</Text>
                            <BorderImage>
                            <Image source={require('../../assets/image-shop-10.png')} resizeMode="contain"/>
                            </BorderImage>
                        </Item>

                        <Item>
                            <Text style={{ fontSize: 16 }}>Brinquedos</Text>
                            <BorderImage>
                            <Image source={require('../../assets/image-shop-11.png')} resizeMode="contain"/>
                            </BorderImage>
                        </Item>

                        <Item>
                            <Text style={{ fontSize: 16 }}>Todas as lojas</Text>
                            <BorderImage>
                                <AntDesign name="appstore1" size={34} color="black" />
                            </BorderImage>
                        </Item>

                        <Text style={{ margin: '2%' }}>
                            Destaques e Eventos
                        </Text>

                        <Item>
                            <Text style={{ fontSize: 16 }}>Podcast e Submarino</Text>
                            <BorderImage>
                                <Image source={require('../../assets/image-shop-12.png')}/>
                            </BorderImage>
                        </Item>

                        <Item>
                            <Text style={{ fontSize: 16 }}>Home Office</Text>
                            <BorderImage>
                                <Image source={require('../../assets/image-shop-13.png')} resizeMode="center"/>
                            </BorderImage>
                        </Item>

                        <Item>
                            <Text style={{ fontSize: 16 }}>Mochilas Sub</Text>
                            <BorderImage>
                                <Image source={require('../../assets/image-shop-14.png')}/>
                            </BorderImage>
                        </Item>

                        <Item>
                            <Text style={{ fontSize: 16 }}>Todos os Destaques</Text>
                            <BorderImage>
                                <AntDesign name="appstore1" size={34} color="black" />
                            </BorderImage>
                        </Item>

                        <Text style={{ margin: '2%', width: "100%" }}>
                            Serviços
                        </Text>

                        <Item>
                            <Text style={{ fontSize: 16 }}>Prime</Text>
                            <BorderImage>
                                <Image source={require('../../assets/image-shop-11.png')}/>
                            </BorderImage>
                        </Item>

                        <Item>
                            <Text style={{ fontSize: 16 }}>Cartão Submarino</Text>
                            <BorderImage>
                                <Image source={require('../../assets/image-shop-11.png')}/>
                            </BorderImage>
                        </Item>

                        <Item>
                            <Text style={{ fontSize: 16 }}>Ame Digital</Text>
                            <BorderImage>
                                <Image source={require('../../assets/image-shop-11.png')}/>
                            </BorderImage>
                        </Item>

                        <Item>
                            <Text style={{ fontSize: 16 }}>Viages</Text>
                            <BorderImage>
                                <Image source={require('../../assets/image-shop-11.png')}/>
                            </BorderImage>
                        </Item>

                        <Item>
                            <Text style={{ fontSize: 16 }}>Gift Card</Text>
                            <BorderImage>
                                <Image source={require('../../assets/image-shop-11.png')}/>
                            </BorderImage>
                        </Item>
                        
                        <Item>
                            <Text style={{ fontSize: 16 }}>Todos os Serviços</Text>
                            <BorderImage>
                                <AntDesign name="appstore1" size={34} color="black" />
                            </BorderImage>
                        </Item>
                    </Content>
                </Scroll>
            </Container>
            <Footer currentPage="shops"/>
        </>
    );
}