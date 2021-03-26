import React from 'react';
import { Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FooterMenu, Button } from './styles'; 

import { FontAwesome, AntDesign, MaterialIcons, MaterialCommunityIcons, Feather } from '@expo/vector-icons';

interface FooterParams {
    currentPage: string;
};

export function Footer({ currentPage }: FooterParams) {
    const { navigate } = useNavigation();

    function handleNavigateToHome() {
        navigate('/');
    }

    function handleNavigateToShops() {
        navigate('/shops');
    }

    function handleNavigateToFavorites() {
        navigate('/favorites');
    }

    function handleNavigateToCart() {
        navigate('/cart');
    }

    function handleNavigateToMore() {
        navigate('/more');
    }

    return (
        <FooterMenu>
            <Button
                onPress={handleNavigateToHome}
            >
                <FontAwesome 
                    name="star" 
                    size={30} 
                    color={currentPage==="highlights" ? "#2D73FB": "#6666"} 
                />
                <Text 
                    style={[{ color: "#6666", fontWeight: 'bold' }, currentPage==="highlights" && { color: "#2D73FB" }]}
                >
                        Destaques
                </Text>
            </Button>

            <Button
                onPress={handleNavigateToShops}
            >
                <AntDesign 
                    name="profile" 
                    size={30} 
                    color={currentPage==="shops" ? "#2D73FB": "#6666"}    
                />
                <Text
                    style={[{ color: "#6666", fontWeight: 'bold' }, currentPage==="shops" && { color: "#2D73FB" }]}
                >Lojas</Text>
            </Button>

            <Button
                onPress={handleNavigateToFavorites}
            >
                <MaterialIcons 
                    name="favorite-outline" 
                    size={30} 
                    color={currentPage==="fav" ? "#2D73FB": "#6666"}     
                />
                <Text
                    style={[{ color: "#6666", fontWeight: 'bold' }, currentPage==="fav" && { color: "#2D73FB" }]}
                >Favoritos</Text>
            </Button>

            <Button
                onPress={handleNavigateToCart}
            >
                <MaterialCommunityIcons 
                    name="cart-plus" 
                    size={30} 
                    color={currentPage==="cart" ? "#2D73FB": "#6666"}     
                />
                <Text
                    style={[{ color: "#6666", fontWeight: 'bold' }, currentPage==="cart" && { color: "#2D73FB" }]}
                >Carrinho</Text>
            </Button>

            <Button
                onPress={handleNavigateToMore}
            >
                <Feather 
                    name="more-horizontal" 
                    size={40} 
                    color={currentPage==="more" ? "#2D73FB": "#6666"}     
                />
                <Text
                    style={[{ color: "#6666", fontWeight: 'bold' }, currentPage==="more" && { color: "#2D73FB" }]}
                >Mais</Text>
            </Button>
        </FooterMenu>
    );
}