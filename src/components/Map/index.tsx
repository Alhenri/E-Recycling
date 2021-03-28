/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useMemo } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import { RestOutlined } from '@ant-design/icons';

import env from '../../services/env';
import data_mock from '../../mocks/map_const.json';

import { MapProps, PointProps } from './interfaces';

const Map: React.FC<MapProps> = ({
  height,
  width,
  setPoint,
  latitude,
  longitude,
}) => {
  const [viewport, setViewport] = useState({
    height,
    width,
    latitude,
    longitude,
    zoom: 5,
  });

  console.log(longitude, latitude)

  useEffect(() => {
    setViewport({ ...viewport, height, width });
  }, [height, width]);

  useEffect(() => {
    setViewport({ ...viewport, latitude, longitude });
  }, [latitude, longitude]);

  const MemorizedMarkers = useMemo(() => {
    return (
      <>
        {data_mock.map((marker) => (
          <Marker longitude={marker.lng} latitude={marker.lat}>
            <RestOutlined
              onClick={() => setPoint(marker)}
              style={{
                color: 'green',
                fontSize: '20px',
              }}
            />
          </Marker>
        ))}
      </>
    );
  }, [data_mock]);

  if (height <= 0) return <></>;

  return (
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken={env.MAP_TOKEN}
      onViewportChange={setViewport}
      mapStyle="mapbox://styles/sonero/ckj1lyxwt0y5019p8bmgn205w"
    >
      {viewport.zoom > 6 && MemorizedMarkers}
    </ReactMapGL>
  );
};

export default Map;
