import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions';

import $ from 'jquery';

import classes from './Homepage.module.css';

import Country from './Country/Country';
import SearchBar from '../SearchBar/SearchBar';

const Homepage = (props) => {
  const { countries, onGetCountries, onSearchForCountry } = props;

  const [countriesState, setCountriesState] = useState([]);

  const [searchInputState, setSearchInputState] = useState('');

  const bodyClasses = [classes.Body, 'container'];
  const countriesWrapper = [
    classes.CountriesWrapper,
    'row row-cols-xs-2 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-4',
  ];

  useEffect(() => {
    $(window).scrollTop(0);
    onGetCountries();
  }, [onGetCountries]);

  useEffect(() => {
    if (countries.length) {
      setCountriesState(countries);
    }
  }, [countries]);

  const inputChangedHandler = ({ target }) => {
    const { value } = target;
    if (!value) {
      return onGetCountries();
    }
    setSearchInputState(value);
  };

  const onSearchSubmit = () => {
    const trimSearchInput = searchInputState.trim();
    if (!trimSearchInput) return;
    const isSearchInputInsideCountries = countriesState.some((item) =>
      item.Country_Name.toLowerCase().includes(trimSearchInput.toLowerCase())
    );
    if (!isSearchInputInsideCountries) return;
    onSearchForCountry(searchInputState);
  };

  let countriesElementsArray = [];
  if (countriesState.length) {
    countriesElementsArray = countriesState.map((item) => (
      <Country
        key={item._id}
        continentCode={item.Continent_Code}
        continentName={item.Continent_Name}
        countryName={item.Country_Name}
        threeLetterCountryCode={item.Three_Letter_Country_Code}
        twoLetterCountryCode={item.Two_Letter_Country_Code}
      />
    ));
  }

  return (
    <div className={classes.Homepage}>
      <div className={classes.Header}>
        <h1>Choose country to see it's best players</h1>
      </div>
      <SearchBar changed={inputChangedHandler} submit={onSearchSubmit} />
      <div className={bodyClasses.join(' ')}>
        <div className={countriesWrapper.join(' ')}>
          {countriesElementsArray}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    countries: state.countries.countries,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetCountries: () => dispatch(actions.getCountries()),
    onSearchForCountry: (searchInput) =>
      dispatch(actions.searchForCountry(searchInput)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
