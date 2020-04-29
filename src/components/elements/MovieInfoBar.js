import React from 'react';
import FontAwesome from 'react-fontawesome';
import { calcTime, convertMoney } from '../../helpers';
import PropTypes from 'prop-types';

import { StyledMovieInfoBar } from '../styles/StyledMovieInfoBar';

const MovieInfoBar = ({ time, budget, revenue }) => (
  <StyledMovieInfoBar>
    <div className='movieinfobar-content'>
      <div className='movieinforbar-content-col'>
        <FontAwesome className='fa-time' name='clock-o' size='2x' />
        <span className='movieinforbar-info'>
          Running time: {calcTime(time)}
        </span>
      </div>
    </div>

    <div className='movieinforbar-content-col'>
      <FontAwesome className='fa-budget' name='money' size='2x' />
      <span className='movieinforbar-info'>Budget: {convertMoney(budget)}</span>
    </div>

    <div className='movieinforbar-content-col'>
      <FontAwesome className='fa-revenue' name='ticket' size='2x' />
      <span className='movieinforbar-info'>
        Revenue: {convertMoney(revenue)}
      </span>
    </div>
  </StyledMovieInfoBar>
);

MovieInfoBar.propTypes = {
  time: PropTypes.number,
  budget: PropTypes.number,
  revenue: PropTypes.number,
};

export default MovieInfoBar;
