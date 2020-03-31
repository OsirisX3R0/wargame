import React, { createContext, useState } from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: #f5f5f5;
        font-family: 'Montserrat', sans-serif;
    }

    button {
        font-family: 'Montserrat', sans-serif;
    }
`;

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
    const [deck, setDeck] = useState('');
    const [player1, setPlayer1] = useState('');
    const [player2, setPlayer2] = useState('');
    return (
        <GameContext.Provider>
            <GlobalStyles />
            {children}
        </GameContext.Provider>
    )
}