import styled from "styled-components";

export const StyledChannelItem = styled.div`
    display: flex;
    align-items: center;    
    padding: .5em 1em .5em 1em;
    margin-bottom: .2em;
    border-radius: 20px;
    cursor:pointer;
    
    &:hover{
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);

    }

    & > h2{
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

    & > img{
        width:50px;
        height:50px;
        border-radius: 50%;
        border: 3px solid #DBDBDB;
        object-fit: cover;
        margin-right: .5rem;
    }
`;