import styled from "styled-components";

export const StyledSideBar = styled.div`
    background-color: #DBDBDB;
    width: 20vw;
    height: 100vh;
    display:flex;
    flex-direction: column;
    padding: 1.02em .5em 0em 0.5em;

    @media(max-width: 768px){
        width: 40vw;
        padding: .30em .5em 0em 0.5em;
    }
`;

export const ChannelsContainer = styled.div`
    background-color: white;
    height:100%;
    padding: 0em 0em 1em 0em;
    border-radius: 10px 10px 0px 0px;
`;

export const ChannelsContainerHeader = styled.div`
    height:10%;
    width:100%;
    border-radius: 10px 10px 0px 0px;
    padding: 0em 2em 0em 2em;
    box-shadow: 0px 5px 10px lightgrey;
    display:flex;
    background-color:blue;
    color: white;
    justify-content: center;
    align-items: center;

    & > h3 {
        width: 100%;
        margin-right: auto;
    }
`;

export const InteriorContainer = styled.div`
    padding: 1em .5em 1em .5em;
    height: 90%;
`;

export const ListContainer = styled.div`
    padding: 0em;
    min-height: 90%;
    max-height: 90%;
    overflow-y: auto;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
`;

export const InteriorContainerFooter = styled.div`
    display:flex;
    justify-content: center;
    align-items: flex-end;
    height: 10%;

    &> button{
        width: 100%;
        height:40px;
        color: white;
        font-size: 1em;
        font-weight: bold;
        border-radius: 20px;
        border: 2px solid blue;
        background-color:transparent;
        color: blue;
        cursor:pointer;
    }

    & > button:hover{
        background-color:blue;
        color:white;
    }
`;