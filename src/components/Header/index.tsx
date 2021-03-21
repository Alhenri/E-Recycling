import React, { useContext } from 'react';
import { Container, ButtonContainer, ButtonStyled, MenuSelect, LinhaH } from './styles';

import { GlobalContext } from '../../data/contexts/GlobalContext';

import logo from '../../assets/logo.png'

interface IProps{
  title?:string
}

const Header: React.FC<IProps> = () => {
  const { context } = useContext(GlobalContext);

  return (
    <Container>
      <img height={50} src={logo} alt="E-Recycling"/>
      <ButtonContainer>
        {!context.isMobile ? (
          <>
          <ButtonStyled>Pontos de coleta</ButtonStyled>
          <ButtonStyled>Criar ponto de coleta</ButtonStyled>
          </>
        ):(
          <MenuSelect>
            <LinhaH />
            <LinhaH />
            <LinhaH />
            <div className="menu-item">
              <span className="item-container">
                <ButtonStyled>Pontos de coleta</ButtonStyled>
                <ButtonStyled>Criar ponto de coleta</ButtonStyled>
              </span>
            </div>
          </MenuSelect>
        )}
      </ButtonContainer>
    </Container>
  );
}

export default Header;