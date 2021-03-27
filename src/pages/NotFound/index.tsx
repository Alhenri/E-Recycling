import React from 'react';
import { ExclamationCircleOutlined, HomeOutlined } from '@ant-design/icons';
import PageDefault from '../../components/PageDefault';
import { Link } from 'react-router-dom';

import { InfoArea, Container } from './styles';

const NotFound: React.FC = () => {
  return (
    <PageDefault>
      <Container>
        <Link to="/">
          <HomeOutlined style={{ color: '#20ba25', fontSize: '60px' }} />
        </Link>
        <InfoArea>
          <h1>Error 404</h1>
          <ExclamationCircleOutlined
            style={{
              color: '#ee2828',
              fontSize: '24px',
            }}
          />
        </InfoArea>
        <h1>Page not Found</h1>
      </Container>
    </PageDefault>
  );
};

export default NotFound;
