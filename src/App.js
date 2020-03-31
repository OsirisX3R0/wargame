import React from 'react';
import './App.scss';
import { GameProvider } from './Context/GameContext';
import Header from './Components/Header';
import { Route } from 'react-router';
import Home from './Components/Home';
import Game from './Components/Game';
import Layout from './Components/Layout';

function App() {
  return (
    <GameProvider>
      <Layout>
        <Route exact path="/" component={Home} />
        <Route path="/game" component={Game} />
      </Layout>
    </GameProvider>
  );
}

export default App;
