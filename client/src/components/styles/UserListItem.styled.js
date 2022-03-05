import styled from "styled-components";

export const StyledUserListItem = styled.div`
    width: 50%;
    display:flex;
    align-items: center;
    justify-content: center;
    border: 3px solid #DBDBDB;
    border-radius: 55px;
    padding-right: 1em;
   
    @media(max-width: ${({ theme }) => theme.mobile}){
        width: 90%;
    }

    & > p{
        display: flex;
        justify-content: center;
        align-items: center;
        width:50px;
        height:50px;
        font-size: 2em;
        margin-right: .5rem;
        border-radius: 0 50% 50% 0;;
        border-right: 3px solid #DBDBDB;
    }


    & > span{
        padding-right: .5em;
        margin-right: auto;
    }
`;

export const Line = styled.span`
    height:1px;
    width:100%;
    background-color: lightgrey;
    margin-bottom: 1em;
    margin-top: 1em;
`;