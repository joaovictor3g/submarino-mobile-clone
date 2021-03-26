import styled from 'styled-components/native';

export const FooterMenu = styled.View`
    position: absolute;
    bottom: 0;

    width: 100%;
    border-top-color: #999;
    border-top-width: 1px;
    height: 70px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;;
    padding: 5%;
    align-items: center;
`;

export const Button = styled.TouchableOpacity`
    align-items: center;
`;