import React from 'react';
import { Container } from './styles';

interface Iprops {
  width: number,
  height: number,
  marginTop: number
}

const Content: React.FC<Iprops> = ({width, height, marginTop, children}) =>{
  return (
    <Container style={{width, height, marginTop}}>
      {children}
    </Container>
  );
}

export default Content;