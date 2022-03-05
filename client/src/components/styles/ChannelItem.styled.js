import styled from "styled-components";

export const StyledChannelItem = styled.div`
    display: flex;
    align-items: center;    
    padding: .5em 1em .5em 1em;
    margin-bottom: .2em;
    border-radius: 20px;
    width: 90%;
    cursor:pointer;
    box-shadow: ${props => props.isSelected ? "0 4px 8px 0 rgba(0,0,0,0.2)" : "none"};

    @media(max-width: ${({ theme }) => theme.mobile}) {
    width: 95%;
    padding: .5em;

        & > p{
            font-size: 1em;
    }
}
    
    &:hover{
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

}

    & > h2{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50px;
        height: 50px;
        font-size: 2em;
        margin-right: .5rem;
        border-radius: 50%;
        border: 3px solid #DBDBDB;
}


    & > p{
        padding-right: .5em;
        margin-right: auto;
}

    & > img{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: 3px solid #DBDBDB;
        object-fit: cover;
        margin-right: .5rem;
}
`;

export const Line = styled.span`
    height:1px;
    width:100%;
    background-color: lightgrey;
    margin-bottom: 1em;
    margin-top: 1em;
`;