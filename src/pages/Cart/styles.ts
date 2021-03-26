import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    align-items: center;
    padding: 5%;
    margin-top: 100px;
`;

export const EmptyCart = styled.View`
    height: 200px;
    width: 100%;
    align-items: center;
`;

export const ExternalCircle = styled.View`
    border-radius: 100px;
    background:#fff;
    padding: 2%;
`;

export const InternalCircle = styled.View`
    border-radius: 100px;
    background-color: #E9E9EE;
    padding: 15%;
`;

export const Title = styled.Text`
    font-size: 34px;
    margin-top: 20px;
`;

export const Description = styled.Text`
    margin-top: 20px;
    font-size: 17px;
    color: #999;
    text-align: center;
`; 

export const Button = styled.TouchableOpacity`
    width: 100%;
    background: #56CD2C;
    align-items: center;
    justify-content:center;
    height: 50px;
    border-radius: 5px;
    margin-top: 20px;
`;