import styled from "styled-components";

export const Title = styled.h1`
    color: #F00;
    font-size: ${props => `${props.fontSize}px`}

    p{
        font-size: 10px;
        color: #0099ff;
    }
`;

export const TitleSmall = styled(Title)`
    font-size: 17px;
    background-color: #0099ff;
`;

const getStyle = type => {
    if (type === "ok") {
        return `
            background-color: #0099ff;
        `;
    }
    if (type === "cancel") {
        return `
            background-color: #FF8080;
        `;
    }if (type === "alert") {
        return `
            background-color: #00CC99;
        `;
    }if (type === "default") {
        return `
            background-color: #00FFFF;
        `;
    }
    return `
    background-color: #FDFDFD;
    `;
}

export const Buttom = styled.button`
    border:none;
    cursor: pointer;
    ${({type}) => getStyle(type)} 
`;

