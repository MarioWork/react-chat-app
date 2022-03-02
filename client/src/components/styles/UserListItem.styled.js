import styled from "styled-components";

export const StyledUserListItem = styled.div`
    width: 50%;
    display:flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    & > p{
        display: flex;
        justify-content: center;
        align-items: center;
        width:50px;
        height:50px;
        font-size: 2em;
        margin-right: .5rem;
        border-radius: 50%;
        border: 3px solid #DBDBDB;
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