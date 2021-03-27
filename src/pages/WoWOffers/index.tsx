import React, { useState } from 'react';
import { AntDesign, Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import productsJSON from '../../../products.json';
import { Header } from '../../components/Header';
import { BackButton, Container, InfoValueView, NormalText, ProductView, TextButton, ScrollViewProducts, Image, InfoTextProducts, InfoProduct, PriceProduct, Parcels } from './styles';
import { Footer } from '../../components/Footer';

interface ProductsProps  {
    _id: number,
    name: string,
    current_price: number,
    image: string;
};

export function WoWOffers() {
    const { navigate } = useNavigation();

    const [products, setProducts] = useState<ProductsProps[]>(productsJSON);
    
    console.log(products[0])
    
    function handleGoBack() {
        navigate('/');
    }

    return (
        <>  
            <Header 
                title="Oferta do dia"
                hasInput
            >   
                <BackButton onPress={handleGoBack}>
                    <AntDesign name="left" size={24} color="#fff" style={{ fontSize: 0 }}/>
                    <TextButton>Voltar</TextButton>
                </BackButton>
               
            </Header>

            <Container>
                <ScrollViewProducts>
                    { products.map((product, idx: number) => (
                        <>
                            <InfoValueView key={product._id}>
                                <NormalText>
                                    R$ 219,99 EM 12x NO CARTÃO
                                </NormalText>
                                <Feather name="credit-card" size={24} color="#fff" />
                            </InfoValueView>

                            <ProductView>
                                <Image source={require(`../../assets/image-wow-${5}.png`)} resizeMode="contain"/>
                                
                                <InfoProduct>
                                    <InfoTextProducts>
                                        {product.name}
                                    </InfoTextProducts>

                                    <PriceProduct>
                                        R$ {product.current_price}
                                    </PriceProduct>

                                    <Parcels>
                                        12x de R$ {(product.current_price/12).toFixed(2)}
                                    </Parcels>
                                </InfoProduct>

                            </ProductView>
                        </>
                    )) }
                </ScrollViewProducts>
            </Container>

            <Footer currentPage="highlights"/>
        </>
    );
}