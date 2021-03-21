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
  :hover,
  :focus {
    border-color: #d9d9d9;
    background-color: #72e076;
    color: #ffffff;
  }
`;
export const LinhaH = styled.div`
  width: 50%;
  border: 1px solid #222;
  margin: 1px 0;
`;

export const MenuSelect = styled.div`
  height: 100%;
  width: 30px;
  background-color: #72e076;
  border-radius: 10% 50%;
  transition: 0.5s;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .menu-item {
    height: auto;
    position: absolute;
    top: 40px;
    width: auto;
    display: none;
    right: 20px;
    span.item-container {
      height: 100px;
      margin-top: 10px;
      border-radius: 5px;
      background-color: #20ba25;
      box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.7);
    }
  }

  :hover {
    background-color: #20ba25;
    border-radius: 50% 10%;
    .menu-item {
      display: flex;
      align-items: center;
      span.item-container {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
      }
    }
  }
`;
