import styled from 'styled-components/native';

interface HeaderContainerProps {
    hasMoreContent?:boolean;
    morePage?:boolean;
}

export const HeaderContainer = styled.View<HeaderContainerProps>`
    width: 100%;
    background: #2D73FB;
    /* position: absolute;
    top: 0; */
    height: ${props => props.hasMoreContent ? `${170}px`: `${130}px` };
    ${props => props.morePage && "height: 70px;"};
    padding: 5%;
    justify-content: center;
`;

export const Title = styled.Text`
    font-size: 24px;
    text-align: center;
    font-weight: bold;
    color: #fff;
    margin-top: 10px;
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