import React, { useContext } from 'react';
import { Container, ButtonContainer, ButtonStyled } from './styles';

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
        {!context.isMobile && (
          <>
          <ButtonStyled>Pontos de coleta</ButtonStyled>
          <ButtonStyled>Criar ponto de coleta</ButtonStyled>
          </>
        )}
      </ButtonContainer>
    </Container>
  );
}

export default Header;