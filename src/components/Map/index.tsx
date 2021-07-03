/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useMemo } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import { RestOutlined } from '@ant-design/icons';
import Loading from 'react-loading';

import env from '../../services/env';
import getMarkers from './api/getMarkers';

import { MapProps, IMarker } from './interfaces';

const Map: React.FC<MapProps> = ({
  setPoint,
  latitude,
  longitude,
  zoom,
  mapClick,
  newPointer,
}) => {
  const [viewport, setViewport] = useState({
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

    if (!mapClick) {
      requestData();
    }
  }, []);

  useEffect(() => {
    setViewport({ ...viewport, latitude, longitude, zoom });
  }, [latitude, longitude, zoom]);

  const MemorizedMarkers = useMemo(() => {
    return (
      <>
        {markers.map((marker) => (
          <Marker
            longitude={marker.lng}
            latitude={marker.lat}
            offsetTop={-10}
            offsetLeft={-10}
          >
            <RestOutlined
              onClick={() => {
                if (setPoint) setPoint(marker);
              }}
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
      height="100%"
      width="100%"
      mapboxApiAccessToken={env.MAP_TOKEN}
      onViewportChange={setViewport}
      onClick={(evnt) => {
        if (mapClick) mapClick(evnt);
      }}
      mapStyle="mapbox://styles/sonero/ckj1lyxwt0y5019p8bmgn205w"
    >
      {viewport.zoom > 6 && MemorizedMarkers}
      {newPointer && newPointer.lat && newPointer.lng && (
        <Marker
          longitude={newPointer.lng}
          latitude={newPointer.lat}
          offsetTop={-10}
          offsetLeft={-10}
        >
          <RestOutlined
            style={{
              color: 'green',
              fontSize: '20px',
            }}
          />
        </Marker>
      )}
    </ReactMapGL>
  );
};

export default Map;
