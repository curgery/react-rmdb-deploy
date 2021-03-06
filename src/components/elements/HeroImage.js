import React from 'react';
import PropTypes from 'prop-types';

// import styled from 'styled-components';
import { StyledHeroImage } from '../styles/StyledHeroImage';

const HeroImage = ({ image, title, text }) => {
  return (
    <StyledHeroImage image={image}>
      <div className='heroimage-content'>
        <div className='heroimage-text'>
          <h1>{title}</h1>
          <p>{text}</p>
        </div>
      </div>
    </StyledHeroImage>
  );
};

HeroImage.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
};

// const StyledHeroImage = styled.div`
//   background: ${(props) =>
//     `linear-gradient(
//     to bottom, rgba(0, 0, 0, 0)
//     39%, rgba(0, 0, 0, 0)
//     41%, rgba(0, 0, 0, 0.8)
//     100%
//   ),
//   url('${props.image}'), #1c1c1c`};
//   background-size: 100%, cover;
//   background-position: center, center;
//   width: 100%;
//   height: 600px;
//   position: relative;
//   animation: animateHeroimage 1s;

//   .heroimage-center {
//     max-width: 1280px;
//     padding: 20px;
//     margin: 0 auto;
//   }

//   .heroimage-text {
//     z-index: 100;
//     max-width: 700px;
//     position: absolute;
//     bottom: 40px;
//     margin-right: 20px;
//     min-height: 100px;
//     color: #666;

//     h1 {
//       font-family: 'Abel', sans-serif;
//       font-size: 48px;
//       color: #666;

//       @media screen and (max-width: 720px) {
//         font-size: 38px;
//         color: #666;
//       }
//     }

//     p {
//       font-family: 'Abel', sans-serif;
//       font-size: 22px;
//       line-height: 26px;
//       color: #666;

//       @media screen and (max-width: 720px) {
//         font-size: 16px;
//         line-height: 26px;
//         color: #666;
//       }
//     }

//     @media screen and (max-width: 720px) {
//       max-width: 100%;
//     }
//   }

//   @keyframes animateHeroimage {
//     from {
//       opacity: 0;
//     }
//     to {
//       opacity: 1;
//     }
//   }
// `;

export default HeroImage;
