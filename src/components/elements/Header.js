import React from 'react';
import { Link } from '@reach/router';
// import styled from 'styled-components';

import RMDBLogo from '../images/reactMovie_logo.png';
import TMDBLogo from '../images/tmdb_logo.svg';

import {
  StyledTMDBLogo,
  StyledRMDBLogo,
  StyledHeader,
} from '../styles/StyledHeader';

const Header = () => (
  <StyledHeader>
    <div>
      <div className='header-content'>
        <Link to='/'>
          {' '}
          <StyledRMDBLogo src={RMDBLogo} alt='rmdb-logo' />
        </Link>
        <StyledTMDBLogo src={TMDBLogo} alt='tmdb-logo' />
      </div>
    </div>
  </StyledHeader>
);

// const StyledHeader = styled.div`
//   background: #1c1c1c;
//   padding: 0 20px;
//   box-sizing: border-box;

//   .header-content {
//     max-width: 1280px;
//     min-height: 120px;
//     margin: 0 auto;
//     box-sizing: border-box;

//     @media screen and (max-width: 500px) {
//       min-height: 0px;
//     }
//   }
// `;

// const StyledRMDBLogo = styled.img`
//   width: 250px;
//   margin-top: 20px;

//   @media screen and (max-width: 500px) {
//     width: 150px;
//     margin-top: 5px;
//   }
// `;

// const StyledTMDBLogo = styled.img`
//   width: 122px;
//   margin-top: 25px;
//   float: right;

//   @media screen and (max-width: 500px) {
//     dispaly: inline-block;
//     width: 80px;
//     margin-top: 0px;
//   }
// `;

export default Header;
