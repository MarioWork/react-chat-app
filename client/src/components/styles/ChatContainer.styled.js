import styled from "styled-components";

export const StyledChatContainer = styled.div`
    width:80vw;
    background-color: #DBDBDB;
    padding: 1.02em .5em 0em 0em;


    @media(max-width: ${({ theme }) => theme.mobile}){
        padding: .30em .5em 0em 1em;
    }
`;

export const StyledChat = styled.div`
    background-color:white;
    width:100%;
    height:100%;
    border-radius: 10px 10px 0px 0px;
    `;

export const StyledChatHeader = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;    
    padding: .5em 1em .5em 2em;
    border-radius: 10px 10px 0px 0px;
    box-shadow: 0px 5px 10px lightgrey;
    width: 100%;
    height: 10%;
    box-sizing: border-box;
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
    z-index: 3;

    & > h2{
        margin-bottom: .1em;
    }
`;