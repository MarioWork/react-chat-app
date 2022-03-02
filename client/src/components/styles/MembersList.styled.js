import styled from "styled-components";

export const StyledMembersList = styled.div`
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
    height: 70%;
    border-radius:20px;
    background-color: white;
`;

export const ModalHeader = styled.div`
    height: 25%;
    padding: 1em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 5px 10px lightgrey;
    align-items: center;
    border-radius: 20px 20px 0px 0px;
`;

export const HeaderTopPart = styled.div`
    display: flex;
    width: 100%;
    height: 50%;
    
    & > h2{
        width: 100%;
        text-align: center;
        margin-right: auto;
    }
`;

export const HeaderSearchPart = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    & > input{
        width: 60%;
        border: 1px solid gray;
       padding: .5em 2em .5em 2em;
       border-radius : 20px;
    }
`;

export const ModalBody = styled.div`
    height: 75%;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    align-items: center;
    padding: 1em;
    border-radius: 0px 0px 20px 20px;
`;

