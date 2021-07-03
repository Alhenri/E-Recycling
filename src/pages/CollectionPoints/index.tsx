import React, { useContext, useState } from 'react';
import { HomeOutlined, RestOutlined } from '@ant-design/icons';

import Map from '../../components/Map';
import PageDefault from '../../components/PageDefault';
import Content from '../../components/Content';
import { GlobalContext, LocationContext } from '../../data/contexts';
import getLocal from '../../services/getLocal';

import { Container, InfoPoint, MapContainer, Button } from './styles';
import { PointProps } from './interfaces';
import { Link } from 'react-router-dom';

const CollectionPoints: React.FC = () => {
  const { context } = useContext(GlobalContext);
  const { location, setLocation } = useContext(LocationContext);
  const [focus, setFocus] = useState(false);
  const [point, setPoint] = useState<PointProps>({ lat: 0, lng: 0, name: '' });

  const height = 0.8 * context.height;
  const width = 0.8 * context.width;

  return (
    <PageDefault>
      <Link to="/">
        <HomeOutlined
          style={{
            position: 'absolute',
            top: 20,
            fontSize: 25,
            color: 'green',
          }}
        />
      </Link>
      <Content width={width} height={height} marginTop={0}>
        <Container>
          <MapContainer className="map-area">
            <Map
              width={width / 2}
              height={height}
              setPoint={setPoint}
              latitude={location.position.lat}
              longitude={location.position.lng}
              zoom={focus ? 10 : 2}
            />
          </MapContainer>
          <InfoPoint className="point-info">
            <h3>{point.name}</h3>
            {point.name !== '' ? (
              <>
                {point.image && (
                  <img
                    src={point.image}
                    alt="not found"
                    style={{ maxWidth: '80%', maxHeight: '50%' }}
                  />
                )}
                <div className="Info">
                  <h4>{`Horario da coleta - ${
                    point.time ? point.time : 'não definido'
                  }`}</h4>
                </div>
              </>
            ) : (
              <h3>
                Selecione um local <RestOutlined style={{ color: 'green' }} />{' '}
                no mapa
              </h3>
            )}
            <div className="button-container">
              <Button
                onClick={() => {
                  setFocus(true);
                  getLocal(location, setLocation);
                }}
              >
                Locais proximos
              </Button>
            </div>
          </InfoPoint>
        </Container>
      </Content>
    </PageDefault>
  );
};

export default CollectionPoints;
