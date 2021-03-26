import React from 'react';
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FooterMenu, Button } from './styles'; 

import { FontAwesome, AntDesign, MaterialIcons, MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import { NumberOfItems } from '../NumberOfItems';

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
                    style={[{ color: "#6666", fontSize: 11 }, currentPage==="highlights" && { color: "#2D73FB" }]}
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
                    style={[{ color: "#6666", fontSize: 11 }, currentPage==="shops" && { color: "#2D73FB" }]}
                >Lojas</Text>
            </Button>

            <Button
                onPress={handleNavigateToFavorites}
            >
                <View>
                    <NumberOfItems />
                    <MaterialIcons 
                        name="favorite-outline" 
                        size={30} 
                        color={currentPage==="fav" ? "#2D73FB": "#6666"}     
                    />
                </View>
                <Text
                    style={[{ color: "#6666", fontSize: 11 }, currentPage==="fav" && { color: "#2D73FB" }]}
                >Favoritos</Text>
            </Button>

            <Button
                onPress={handleNavigateToCart}
            >   
                <View>
                    <NumberOfItems />
                    <MaterialCommunityIcons 
                        name="cart-plus" 
                        size={30} 
                        color={currentPage==="cart" ? "#2D73FB": "#6666"}     
                    />
                </View>
                <Text
                    style={[{ color: "#6666", fontSize: 11 }, currentPage==="cart" && { color: "#2D73FB" }]}
                >Carrinho</Text>
            </Button>

            <Button
                onPress={handleNavigateToMore}
            >
                <View>
                    <NumberOfItems />
                    <Feather 
                        name="more-horizontal" 
                        size={40} 
                        color={currentPage==="more" ? "#2D73FB": "#6666"}     
                    />
                </View>
                <Text
                    style={[{ color: "#6666", fontSize: 11 }, currentPage==="more" && { color: "#2D73FB" }]}
                >
                    Mais
                </Text>
            </Button>
        </FooterMenu>
    );
}