import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions';

import classes from './Homepage.module.css';

const Homepage = (props) => {
  const {
    example,
    fetchedExample,
    error,
    onToggleExample,
    onGetExample,
  } = props;

  useEffect(() => {
    console.log(example);
  }, [example]);

  useEffect(() => {
    console.log(fetchedExample);
  }, [fetchedExample]);

  useEffect(() => {
    console.log(error);
  }, [error]);

  const onToggleExampleHanlder = () => {
    onToggleExample();
  };

  const onGetExampleHandler = () => {
    onGetExample();
  };

  return (
    <div className={classes.Homepage}>
      <h1>Homepage here</h1>
      <button onClick={onToggleExampleHanlder}>Toggle Example</button>
      <button onClick={onGetExampleHandler}>Fetch Example</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    example: state.example.example,
    error: state.example.error,
    fetchedExample: state.example.fetchedExample,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onToggleExample: () => dispatch(actions.toggleExample()),
    onGetExample: () => dispatch(actions.getExample()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
