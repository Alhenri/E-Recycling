/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useMemo } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import { RestOutlined } from '@ant-design/icons';
import Loading from 'react-loading';

import env from '../../services/env';
import getMarkers from './api/getMarkers';

import { MapProps, IMarker } from './interfaces';

const Map: React.FC<MapProps> = ({
  height,
  width,
  setPoint,
  latitude,
  longitude,
  zoom,
}) => {
  const [viewport, setViewport] = useState({
    height,
    width,
    latitude,
    longitude,
    zoom,
  });

  const [markers, setMarkers] = useState<IMarker[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const requestData = async () => {
      setLoading(true);
      const response = await getMarkers();
      setLoading(false);
      setMarkers(response);
    };

    requestData();
  }, []);

  useEffect(() => {
    setViewport({ ...viewport, height, width });
  }, [height, width]);

  useEffect(() => {
    setViewport({ ...viewport, latitude, longitude, zoom });
  }, [latitude, longitude, zoom]);

  const MemorizedMarkers = useMemo(() => {
    return (
      <>
        {markers.map((marker) => (
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
  }, [markers]);

  if (height <= 0) return <></>;
  if (loading)
    return (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Loading type="spokes" color="green" />
      </div>
    );

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
