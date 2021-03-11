import styled from 'styled-components';
import { Button } from 'antd';

export const Container = styled.header`
  width: 80%;
  height: 50px;
  padding: 5px 20px;
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 15px;
`;

export const ButtonContainer = styled.div`
  height: 100%;
`;

export const ButtonStyled = styled(Button)`
  margin: 0 5px;
  background-color: #b7f7a9;
  color: #20ba25;
  font-weight: 600;
  :hover, :focus{
    border-color: #d9d9d9;
    background-color: #72e076;
    color: #FFFFFF;
  }
`