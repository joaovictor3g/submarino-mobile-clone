import styled from 'styled-components/native'

export const Container = styled.View`
    flex: 1;
    padding-top: 40px;

`;

export const ScrollHorizontal = styled.ScrollView`
    max-height: 130px;
`;

export const ContainerOfferItems = styled.View`
    width: 100%;
    padding-top: 5px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    max-width: 110%;
    padding-right: 15px;
    
`;

export const LabelAndOffer = styled.View`
    align-items: center;
    margin-left: 10px;
`;

export const OfferItem = styled.TouchableOpacity`
    border-radius: 100px;
    background: #fff;
    width: 70px;
    height: 70px;
    justify-content: center;
    align-items: center;
    
`;