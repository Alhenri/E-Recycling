import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 15px;
  overflow-y: auto;
  h1{
    color: #20ba25;
    font-size: 42px;
  }
  background: linear-gradient(
    140deg,
    rgba(202, 252, 186, 0.4) 20%,
    rgba(221, 253, 176, 0.4) 44%,
    rgba(234, 254, 169, 0.4) 86%
  );
`;
