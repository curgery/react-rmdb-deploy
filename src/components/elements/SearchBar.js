import React, { useState, useRef } from 'react';
import FontAwesome from 'react-fontawesome';
import PropTypes from 'prop-types';

import {
  StyledSearchBar,
  StyledSearchBarContent,
} from '../styles/StyledSearchBar';

const SearchBar = ({ callback }) => {
  const [state, setState] = useState('');
  const timeOut = useRef(null);

  const doSearch = (event) => {
    console.log(event.target.value);
    const { value } = event.target;

    clearTimeout(timeOut.current);
    setState(value);

    timeOut.current = setTimeout(() => {
      callback(value);
    }, 500);
  };

  return (
    <StyledSearchBarContent>
      <StyledSearchBar>
        <FontAwesome className='fa-search' name='search' size='2x' />
        <input
          type='text'
          placeholder='Search Movie'
          onChange={doSearch}
          value={state}
        />
      </StyledSearchBar>
    </StyledSearchBarContent>
  );
};

SearchBar.propTypes = {
  callback: PropTypes.func,
};

export default SearchBar;
