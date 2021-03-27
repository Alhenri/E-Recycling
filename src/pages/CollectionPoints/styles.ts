import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: grid;

  grid-template-areas: 'map-area point-info';
  grid-template-columns: auto auto;
  grid-template-rows: auto;

`;

export const MapContainer = styled.div`
`;

export const InfoPoint = styled.div`
  width: 100%;
  height: 100%;

`;