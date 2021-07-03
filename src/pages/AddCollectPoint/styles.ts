import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: grid;

  grid-template-areas: 'map-area form-area';
  grid-template-columns: 50% 50%;
  grid-template-rows: 100%;

  @media (max-width: 600px) {
    grid-template-areas: 'map-area' 'form-area';
    grid-template-rows: 50% 50%;
    grid-template-columns: 100%;
  }

  .form-area {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
  }
`;

export const MapContainer = styled.div``;

export const FormContainer = styled.div`
  height: 200px;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
`;

export const Input = styled.input`
  height: 35px;
  width: 300px;
  margin: auto;

  border-radius: 15px;
  border: none;
  padding: 0 15px;
  outline: 0;
`;

export const SubmitButton = styled.button`
  height: 35px;
  width: 200px;

  border-radius: 15px;
  border: none;
  padding: 0 15px;
  outline: 0;

  background-color: #9DB060;
  transition: 0.2s;
  :hover{
    background-color: #dDf060;
  }
`;
