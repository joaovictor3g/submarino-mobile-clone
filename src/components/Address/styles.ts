import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const SCREEN_DIMENSIONS = Dimensions.get('window');

export const Container = styled.View`
    flex: 1;
    height: 100%;
    width: 100%;
    position: absolute;
    
`;

export const ContainerOpenModal = styled.View`
    bottom: 0;
    position: absolute;
    height: 95%;
    background-color: #f0f0f5;
    width: 100%;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    padding-left: 25px;
    padding-right: 25px;
    
    padding-top: 15px;
`;

export const Indicator = styled.TouchableOpacity`
    width: 40px;
    height: 7px;
    background: #ccc;
    border-radius: 5px;
`;

export const Text = styled.Text`
    margin-top: 10px;
    font-size: 16px;
`;

export const Input = styled.TextInput`
    width: 100%;
    background: #fff;

    margin-top: 10px;
    height: 50px;
    border-radius: 5px;
    padding-left: 5%;
    box-shadow: 10px 5px 5px #0002;
`;

export const AddButton = styled.TouchableOpacity`
    background: #fff;
    border-radius: 15px;
    width: 80px;
    height: 30px;
    justify-content: center;
    align-items: center;
    text-align: center;
    box-shadow: 10px 5px 5px #0002;
    
`;

export const AddressContent = styled.TouchableOpacity`
    display: flex;
    width: 100%;
    height: 100px;
    background: #fff;
    margin-top: 10px;
    border-radius: 10px;
    justify-content: space-between;
    padding: 16px;
    flex-direction: row;
    align-items: center;
    box-shadow: 10px 5px 5px #0002;

`;

export const AddressInfo = styled.View`

`;