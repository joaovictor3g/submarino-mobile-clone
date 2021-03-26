import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;    
    display: flex;
    max-height: 60%;
`;

export const Content = styled.View`
    width: 100%;
    padding: 2%;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    

`;

export const Scroll = styled.ScrollView`

`;

export const Text = styled.Text`
    font-weight: bold;
    font-size: 18px;

`;

export const Item = styled.TouchableOpacity`
    width: 48%;
    height: 130px;
    background: #fff;
    border-radius: 5px;
    padding: 2%;
    margin-bottom: 5%;
`;

export const BorderImage = styled.View`
    border-radius: 100px;
    width: 70px;
    height: 70px;
    position: absolute;
    bottom: 5px;
    right: 5px;
    background: #ddd;
    justify-content: center;
    align-items: center;
`;

export const Image = styled.Image`
    /* border-top-right-radius: 220px;
    border-bottom-right-radius: 150px; */
    width: 80px;
    height: 80px;
    /* position: absolute;
    bottom: 4px;
    right: 6px; */
`;