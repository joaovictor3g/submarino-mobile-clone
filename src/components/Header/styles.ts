import styled from 'styled-components/native';

export const HeaderContainer = styled.View`
    width: 100%;
    background: #2D73FB;
    position: absolute;
    top: 0;
    height: 130px;
    padding: 5%;
`;

export const Input = styled.TextInput`
    width: 100%;
    background: #fff;
    margin-top: 20px;
    height: 40px;
    border-radius: 10px;
    font-size: 20px;
    padding: 2%;
`;

export const Separator = styled.View`
    width: 100%  !important;
    padding: 0  !important;
    background: #000;
    height: 1px;
    margin-top: 10px;
    margin-bottom: 6px;
`;

export const AddressContent = styled.View`
    flex-direction: row;
    display: flex;
    justify-content: space-between;
    padding: 0 5% 0 5%;
    align-items: center;
`;

export const HeaderText = styled.Text`
    color: #fff;
    font-size: 16px;    
`;