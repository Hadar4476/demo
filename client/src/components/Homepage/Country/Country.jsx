import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { flagImageUrl } from '../../../myaxios';

import classes from './Country.module.css';

const animateCSSClasses = {
  fadeIn: 'animate__animated animate__fadeIn',
};

const Country = (props) => {
  const { continentName, countryName, twoLetterCountryCode } = props;

  const history = useHistory();

  const imageRef = useRef(null);

  const onNavigateToSingleCountryPlayersPage = () => {
    history.push(`/${countryName}/players`);
  };

  const countryClasses = [classes.Country, animateCSSClasses.fadeIn];

  return (
    <div className={countryClasses.join(' ')}>
      <div className={classes.Name}>
        <h4 title={countryName}>{countryName}</h4>
      </div>
      <div className={classes.Image}>
        <img
          ref={imageRef}
          onClick={onNavigateToSingleCountryPlayersPage}
          src={`${flagImageUrl}${twoLetterCountryCode.toLowerCase()}.png`}
          alt={countryName}
        />
      </div>
      <div className={classes.ContinentName}>
        <span>{continentName}</span>
      </div>
    </div>
  );
};

export default Country;
