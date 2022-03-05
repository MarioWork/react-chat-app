import styled from "styled-components";

export const StyledCreateChannelModal = styled.div`
    width: 100%;
    height: 100%;
    display:flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0,0.5);
    position: absolute;
    z-index: 2;
`;

export const Modal = styled.div`
    width: 40%;
    height: 40%;
    border-radius:20px;
    background-color: white;
    @media(max-width: ${({ theme }) => theme.mobile}){
        width: 50%;
    }
`;


export const ModalHeader = styled.div`
    height: 30%;
    padding: 1em;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 5px 10px lightgrey;
    align-items: center;
    border-radius: 20px 20px 0px 0px;

    & > h3 {
        width: 100%;
        text-align: center;
        padding-left: 1.5em;
    }
`;


export const ModalBody = styled.div`
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    align-items: center;
    padding: 1.5em 1em 1em 1em;
    border-radius: 0px 0px 20px 20px;

    & > p{
        color: red;
        font-weight: bold;
    }

    & > form {
        display:flex;
        flex-direction: column;
    }

    & > form > input{
        width: 100%;
        border: 1px solid gray;
        padding: .5em 2em .5em 2em;
        border-radius : 20px;
        margin-bottom: 1em;
    }

    & > form > button{
        width: 100%;
        height:40px;
        color: white;
        font-size: 1em;
        font-weight: bold;
        border-radius: 20px;
        border: 2px solid  ${({ theme }) => theme.colors.primary};
        background-color:transparent;
        color:  ${({ theme }) => theme.colors.primary};
        margin-bottom: .7em;
        cursor:pointer;
    }

    & > form > button:hover{
        background-color: ${({ theme }) => theme.colors.primary};
        color:white;
    }
`;