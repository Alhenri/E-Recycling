import React, { useEffect, useState } from 'react';
import ReactMapGL from 'react-map-gl';

import env from '../../services/env';

import { MapProps } from './interfaces';

const Map: React.FC<MapProps> = ({ height, width }) => {
  const [viewport, setViewport] = useState({
    height,
    width,
    latitude: -8.098912411523298,
    longitude: -36.269891668827086,
    zoom: 5,
  });

  useEffect(() => {
    setViewport({ ...viewport, height, width });
  }, [height, width]);

  if (height <= 0) return <></>;

  return (
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken={env.MAP_TOKEN}
      onViewportChange={setViewport}
      mapStyle="mapbox://styles/sonero/ckj1lyxwt0y5019p8bmgn205w"
      onClick={(evnt) => console.log(evnt)}
    />
  );
};

export default Map;
