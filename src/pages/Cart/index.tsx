import React from 'react';
import { Text } from 'react-native';
import { Footer } from '../../components/Footer';
import { Button, Container, Description, EmptyCart, ExternalCircle, InternalCircle, Title } from './styles';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons }  from '@expo/vector-icons';

export function Cart() {
    const { navigate } = useNavigation();

    function handleNavigateToHome() {
        navigate('/');
    }

    return (
        <>
            <Container>
                <EmptyCart>
                    <ExternalCircle>
                        <InternalCircle>
                            <MaterialCommunityIcons 
                                name="cart-plus" 
                                size={34} 
                                color="#6666"
                            />
                        
                        </InternalCircle>
                        
                    </ExternalCircle>

                    <Title>
                        Carrinho vazio
                    </Title>

                    <Description>
                        Continue com a sua busca por um produto,
                        voltando para a página inicial ou saiba mais 
                        sobre as promoções do dia.
                    </Description>

                    <Button
                        onPress={handleNavigateToHome}
                    >
                        <Text style={{ color: "#fff", fontSize: 18 }}>
                            página inicial
                        </Text>
                    </Button>
                </EmptyCart>
            </Container>
            <Footer currentPage="cart"/>
        </>
    );
}