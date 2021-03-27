import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    padding: 10px;
    max-height: 65%;

`;

export const BackButton = styled.TouchableOpacity`
    position: absolute;
    top: 17%;
    margin-left: 10px;  
    justify-content: center;
    align-items: center;
    flex-direction: row;

`;

export const TextButton = styled.Text`
    color: #fff;
    font-weight: bold;
    font-size: 16px;
`;

export const ScrollViewProducts = styled.ScrollView`

`;

export const InfoValueView = styled.View`
    width: 100%;
    height: 50px;
    background: red;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    padding-left: 30px;
    padding-right: 30px;

`;

export const NormalText = styled.Text`
    color: #fff;
    font-size: 18px;
    font-weight: bold;
    
`;

export const ProductView = styled.View`
    margin-top: 10px;
    width: 100%;
    height: 150px;
    background: #fff;
    border-radius: 5px;
    margin-bottom: 10px;
    padding: 15px;
    flex-direction: row;
    /* align-items: center; */
`;

export const Image = styled.Image`
    width: 100px;
    height: 100px;
    justify-content: center;
`;

export const InfoProduct = styled.TouchableOpacity`
    margin-left: 20px;
`;

export const InfoTextProducts = styled.Text`
    font-size: 18px;
`;

export const PriceProduct = styled.Text`
    font-size: 26px;
`;

export const Parcels = styled.Text`
    color: #999;
`;
