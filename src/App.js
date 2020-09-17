import React from 'react';
import Game from './js/components/Game/Game';
import Intro from './js/components/Setup/Intro';
import { connect } from 'react-redux';

function App({ gameActive }) {
  return gameActive ? <Game /> : <Intro />;
}

function mapStateToProps(state) {
  return {
    gameActive: state.gameActive,
  };
}

export default connect(mapStateToProps)(App);
