import React, { useContext } from 'react';
import { Container, ButtonContainer, ButtonStyled, MenuSelect, LinhaH } from './styles';
import { GlobalContext } from '../../data/contexts/GlobalContext';
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';

interface IProps{
  title?:string;
  toButtonLeft: string;
  toButtonRight: string;
}

const Header: React.FC<IProps> = ({ toButtonLeft, toButtonRight }) => {
  const { context } = useContext(GlobalContext);

  return (
    <Container>
      <img height={50} src={logo} alt="E-Recycling"/>
      <ButtonContainer>
        {!context.isMobile ? (
          <>
          <Link to={toButtonLeft}>
            <ButtonStyled>Pontos de coleta</ButtonStyled>
          </Link>
          <Link to={toButtonRight}>
            <ButtonStyled>Criar ponto de coleta</ButtonStyled>
          </Link>
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