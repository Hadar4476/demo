import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { flagImageUrl } from '../../myaxios';

import * as actions from '../../store/actions';

import $ from 'jquery';

import classes from './Players.module.css';

import PlayerTable from './PlayerTable/PlayerTable';
import Spinner from '../UI/Spinner/Spinner';

const Players = (props) => {
  const {
    countries,
    countryDetails,
    players,
    onGetCountries,
    onGetCountryDetails,
    onGetPlayersPerCountry,
  } = props;

  const [countryState, setCountryState] = useState({});

  const { pathname } = useLocation();

  useEffect(() => {
    $(window).scrollTop(0);
    if (!countries.length) {
      onGetCountries();
    }
  }, [countries, onGetCountries]);

  useEffect(() => {
    const splitPathname = pathname
      .split('/')
      .filter((item) => item.trim().length);
    const countryName = splitPathname[0];
    const findCountryByName = countries.filter(
      (item) => item.Country_Name === countryName
    );
    setCountryState(findCountryByName[0]);
  }, [countries, pathname]);

  useEffect(() => {
    const twoLetterCountryCode = countryState?.Two_Letter_Country_Code;
    if (twoLetterCountryCode) onGetPlayersPerCountry(twoLetterCountryCode);
  }, [countryState, onGetPlayersPerCountry]);

  useEffect(() => {
    if (countryState && countryState.Country_Name) {
      const { Country_Name } = countryState;
      const trimCountryName = Country_Name.split(/[,\s]/g)[0];
      onGetCountryDetails(trimCountryName);
    }
  }, [countryState, onGetCountryDetails]);

  let countryElement = null;
  if (countryState && countryState.Country_Name) {
    const {
      Country_Name,
      Continent_Name,
      Two_Letter_Country_Code,
    } = countryState;
    countryElement = (
      <div className={classes.Country}>
        <div className={classes.Image}>
          <img
            src={`${flagImageUrl}${Two_Letter_Country_Code.toLowerCase()}.png`}
            alt={Country_Name}
          />
        </div>
        <div className={classes.Info}>
          <div className={classes.CountryName}>
            <p>{Country_Name}</p>
          </div>
          <div className={classes.ContinentName}>
            <span>{Continent_Name}</span>
          </div>
        </div>
      </div>
    );
  }
  let countryDetailsElemetns = null;
  if (countryDetails && countryDetails.length) {
    const { capital, population, currencies, languages } = countryDetails;

    let currenciesElements = [];
    let languagesElements = [];
    if (currencies.length && languages.length) {
      currenciesElements = currencies.map((item) => item.name);
      languagesElements = languages.map((item) => item.name);
    }

    countryDetailsElemetns = (
      <div className={classes.CountryDetails}>
        <div className={classes.Capital}>
          <span>Capital: {capital}</span>
        </div>
        <div className={classes.Population}>
          <span>Population: {population}</span>
        </div>
        <div className={classes.Currencies}>
          <span>Currenices:{currenciesElements.join(' ')}</span>
        </div>
        <div className={classes.Languages}>
          <span>Languages: {languagesElements.join(' ')}</span>
        </div>
      </div>
    );
  }

  let gamesTablesElementsArray = [];
  if (players && players.length) {
    const gamesArray = [];
    const findUniqueGames = [...new Set(players.map((item) => item.Game))];
    for (let i = 0; i < findUniqueGames.length; i++) {
      const mapPlayersByGames = players.filter(
        (item) => item.Game === findUniqueGames[i]
      );
      const sortByHigherProfit = mapPlayersByGames.sort(
        (current, next) => next.TotalUSDPrize - current.TotalUSDPrize
      );
      gamesArray.push([findUniqueGames[i], sortByHigherProfit]);
    }
    gamesTablesElementsArray = gamesArray.map((item) => (
      <PlayerTable key={item[0]} game={item[0]} players={item[1]} />
    ));
  }

  return (
    <div classes={classes.Players}>
      <Spinner />
      {countryDetailsElemetns}
      {countryElement}
      <div className={classes.Body}>{gamesTablesElementsArray}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    countries: state.countries.countries,
    countryDetails: state.countries.countryDetails,
    players: state.players.players,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetCountryDetails: (countryName) =>
      dispatch(actions.getCountryDetails(countryName)),
    onGetCountries: () => dispatch(actions.getCountries()),
    onGetPlayersPerCountry: (countryCode) =>
      dispatch(actions.getPlayersPerCountry(countryCode)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Players);
