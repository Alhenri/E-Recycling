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
    padding: 15px 10px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;

    img {
      max-width: 50%;
      max-height: 50%;
    }

    @media (max-width: 505px){
      font-size: 12px;
      h2{
        font-size: 16px;
      }
    }
  }
`;

export const MapContainer = styled.div``;

export const FormContainer = styled.div`
  max-height: 200px;
  width: 80%;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
`;

export const Input = styled.input`
  max-height: 35px;
  width: 100%;
  margin: 5px 0;

  border-radius: 15px;
  border: none;
  padding: 0 15px;
  outline: 0;
`;

export const SubmitButton = styled.button`
  max-height: 35px;
  max-width: 200px;

  border-radius: 15px;
  border: none;
  padding: 0 15px;
  outline: 0;

  background-color: #9db060;
  transition: 0.2s;
  :hover {
    background-color: #ddf060;
  }
`;
