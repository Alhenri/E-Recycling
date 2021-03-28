import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: grid;

  grid-template-areas: 'map-area point-info';
  grid-template-columns: 50% 50%;
  grid-template-rows: 100%;
`;

export const MapContainer = styled.div``;

export const InfoPoint = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;

  h3 {
    margin-top: 15px;
  }
  .button-container{
    display: flex;
    justify-content: space-around;
    margin-bottom: 20px;
  }
`;

export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  margin: 0px 5px;
  width: 150px;
  height: 25px;
  background-color: #7fff7a;
  border-radius: 5px;
  box-shadow: 3px 3px 5px;
`;
