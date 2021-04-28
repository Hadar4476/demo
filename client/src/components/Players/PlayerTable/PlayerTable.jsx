import React, { useEffect, useState } from 'react';

import classes from './PlayerTable.module.css';

import Player from './Player/Player';

const PlayerTable = (props) => {
  const { game, players } = props;

  const [playersState, setPlayersState] = useState([]);
  const [uniqueGenresState, setUniqueGenresState] = useState([]);

  useEffect(() => {
    if (players && players.length) {
      setPlayersState(players);
    }
  }, [players]);

  useEffect(() => {
    if (players && players.length) {
      const findUniqueGenres = [...new Set(players.map((item) => item.Genre))];
      setUniqueGenresState(findUniqueGenres);
    }
  }, [players]);

  let headerssElementsArray = [];
  if (uniqueGenresState && uniqueGenresState.length) {
    headerssElementsArray = uniqueGenresState.map((item) => (
      <div key={game} className={classes.Header}>
        <h1>{game}:</h1>
        <p>{item}</p>
      </div>
    ));
  }

  let playersElementsArray = [];
  if (playersState && playersState.length) {
    playersElementsArray = playersState.map((item) => (
      <Player
        key={item._id}
        firstName={item.NameFirst}
        lastName={item.NameLast}
        nickname={item.CurrentHandle}
        profit={item.TotalUSDPrize}
      />
    ));
  }

  return (
    <div className={classes.PlayerTable}>
      {headerssElementsArray}
      <div className={classes.Body}>
        <div className={classes.PlayerInfo}>
          <div className={classes.FirstName}>
            <span>First Name</span>
          </div>
          <div className={classes.LastName}>
            <span>Last Name</span>
          </div>
          <div className={classes.Nickname}>
            <span>Name In Game</span>
          </div>
          <div className={classes.Profit}>
            <span>Profit</span>
          </div>
        </div>
        {playersElementsArray}
      </div>
    </div>
  );
};

export default PlayerTable;
