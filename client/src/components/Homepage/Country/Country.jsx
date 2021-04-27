import React from 'react';
import { useHistory } from 'react-router-dom';
import { flagImageUrl } from '../../../myaxios';

import classes from './Country.module.css';

const Country = (props) => {
  const { continentName, countryName, twoLetterCountryCode } = props;

  const history = useHistory();

  const onNavigateToSingleCountryPlayersPage = () => {
    history.push(`/${countryName}/players`);
  };

  return (
    <div
      className={classes.Country}
      onClick={onNavigateToSingleCountryPlayersPage}
    >
      <div className={classes.Name}>
        <span>{countryName}</span>
      </div>
      <div className={classes.Image}>
        <img
          src={`${flagImageUrl}${twoLetterCountryCode.toLowerCase()}.png`}
          alt={countryName}
        />
      </div>
      <div className={classes.continentName}>
        <span>{continentName}</span>
      </div>
    </div>
  );
};

export default Country;
