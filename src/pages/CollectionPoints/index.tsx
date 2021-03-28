import React, { useContext, useState } from 'react';

import Map from '../../components/Map';
import PageDefault from '../../components/PageDefault';
import Content from '../../components/Content';
import { GlobalContext, LocationContext } from '../../data/contexts';
import getLocal from '../../services/getLocal';

import { Container, InfoPoint, MapContainer, Button } from './styles';
import { PointProps } from './interfaces';

const CollectionPoints: React.FC = () => {
  const { context } = useContext(GlobalContext);
  const { location, setLocation } = useContext(LocationContext);
  const [point, setPoint] = useState<PointProps>({ lat: 0, lng: 0, name: '' });

  const height = 0.8 * context.height;
  const width = 0.8 * context.width;

  return (
    <PageDefault>
      <Content width={width} height={height} marginTop={0}>
        <Container>
          <MapContainer className="map-area">
            <Map
              width={width / 2}
              height={height}
              setPoint={setPoint}
              latitude={location.position.lat}
              longitude={location.position.lng}
            />
          </MapContainer>
          <InfoPoint className="point-info">
            <h3>{point.name}</h3>
            <div className="Info"></div>
            <div className="button-container">
              <Button onClick={() => getLocal(location, setLocation)}>
                Locais proximos
              </Button>
              {/* <Button>a</Button> */}
            </div>
          </InfoPoint>
        </Container>
      </Content>
    </PageDefault>
  );
};

export default CollectionPoints;
