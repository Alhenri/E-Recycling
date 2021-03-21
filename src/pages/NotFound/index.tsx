import React from 'react';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import PageDefault from '../../components/PageDefault';

import { InfoArea } from './styles';

const NotFound: React.FC = () => {
  return (
    <PageDefault>
      <InfoArea>
        <ExclamationCircleOutlined
          style={{
            color: '#ee2828',
            fontSize: '60px',
          }}
        />
        <h1>Error 404</h1>
        <h1>Page not Found</h1>
      </InfoArea>
    </PageDefault>
  );
};

export default NotFound;
