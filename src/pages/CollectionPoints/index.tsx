import React, { useContext, useMemo } from 'react';

import Map from '../../components/Map';
import PageDefault from '../../components/PageDefault';
import Content from '../../components/Content';
import { GlobalContext } from '../../data/contexts/GlobalContext';

import { Container, InfoPoint, MapContainer } from './styles';

const CollectionPoints: React.FC = () => {
  const { context } = useContext(GlobalContext);
  const height = 0.8 * context.height;
  const width = 0.8 * context.width;

  return (
    <PageDefault>
      <Content width={width} height={height} marginTop={0}>
        <Container>
          <MapContainer className="map-area">
            <Map width={width/2} height={height} />
          </MapContainer>
          <InfoPoint className="point-info"></InfoPoint>
        </Container>
      </Content>
    </PageDefault>
  );
};

export default CollectionPoints;
