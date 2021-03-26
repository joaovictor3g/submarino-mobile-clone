import styled from 'styled-components/native';

interface TextButtonProps {
    color?: boolean;
}

interface ButtonProps {
    firstChild?:boolean;
}

export const SafeArea = styled.SafeAreaView`
    flex: 1;
    max-height: 79%;
`;

export const ScrollInItems = styled.ScrollView`
   
`;

export const ButtonGroup = styled.View`
    margin-top: 30px;
`;

export const Button = styled.TouchableOpacity<ButtonProps>`
    display: flex;
    width: 100%;
    background: #fff;
    height: 50px;
    border-top-width: 1px;
    border-bottom-width: ${props => props.firstChild ? `${1}px`: `${0.5}px`};
    border-style: solid;
    border-color: #ddd;
    ${props => props.firstChild  ? 
        `align-items: center;
        justify-content: center;`:
        `
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        `
    };
    margin-top: ${props => props.firstChild ? `${40}px`: `${0}px`};
    
`; 

export const TextButton = styled.Text<TextButtonProps>`
    color: ${props => props.color ? "blue" : "#666" };
    font-size: 20px;
    margin-left: ${props => props.color ? 0 : `${4}%`};
    display: flex;
    align-items: center;
    justify-content: space-between;
    
`;

export const VersionContainer = styled.View`
    padding: 5%;

`;

export const Version = styled.Text`
    font-weight: bold;
    color: #6666;
    font-size: 17px;
`;

export const DevelopedBy = styled.Text`
    color: #ccc;
`;