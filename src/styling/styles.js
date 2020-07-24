import styled from 'styled-components/macro';

export const QUERIES = {
  large: `max-width: 1125px`,
  medium: `max-width: 870px`,
  small: `max-width: 670px`,
};

export const COLORS = {
  // Design Colors
  black: '#000',
  cornFlowerBlue: '#7f95d1',
  glaucous: '#6983c9',
  lavendarBlue: '#e3d7ff',
  spanishPink: '#ffc0be',
  congoPink: '#ff8985',
  MistyRose: '#ffebe7',

  // Font Colors
  jet: '#292929',
  davysGrey: '#525252',

  // Icon Colors
  sonicSilver: '#555',
  maximumBluePurple: '#b899ff',
  mediumSpringGreen: '#14f594',

  // buttons
  grayWeb: '#c1c2c2',
  lightGray: '#EBEAEA',
};

export const Layout = styled.div`
  min-height: 100vh;
  width: 100vw;
  max-width: 1200px;
  /* display choice */
  display: grid;
  grid-template-columns:
    1fr [center-start] repeat(8, minmax(min-content, 14rem))
    [center-end] 1fr;
  grid-template-rows: auto 1fr auto;
  grid-row-gap: 5rem;

  margin: 0 auto;
  /* border: 3px dotted ${COLORS.cornFlowerBlue}; */
`;
