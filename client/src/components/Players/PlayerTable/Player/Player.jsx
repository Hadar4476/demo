import React from 'react';

import classes from './Player.module.css';

const Player = (props) => {
  const { firstName, lastName, nickname, profit } = props;

  return (
    <div className={classes.Player}>
      <div className={classes.FirstName}>
        <span>{firstName}</span>
      </div>
      <div className={classes.LastName}>
        <span>{lastName}</span>
      </div>
      <div className={classes.Nickname}>
        <span>{nickname}</span>
      </div>
      <div className={classes.Profit}>
        <span>{profit}</span>
      </div>
    </div>
  );
};

export default Player;
