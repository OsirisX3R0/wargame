import styled from 'styled-components';

export const Container = styled.div`
    max-width: 1000px;
    text-align: center;
    margin: auto;
`;

export const Heading = styled.h1`
    color: #bbb;
    font-size: 1.8rem;
    letter-spacing: .75rem;
    font-variant: small-caps;

`;

const BaseButton = styled.button`
    background-color: transparent;
    border: 0;
    border-radius: 20px;
    padding: .5rem;
    cursor: pointer;
`;

export const StartGameButton = styled(BaseButton)`
    min-width: 265px;
    background-color: transparent;
    border: 1px solid #bbb;
    display: inline-block;
    transition: all .2s;

    &:hover {
        background-color: #bbb;
    }
`;