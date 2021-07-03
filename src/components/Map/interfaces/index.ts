import { PointerEvent } from 'react-map-gl';

export interface PointProps {
  name: string;
  lng: number;
  lat: number;
}

export interface MapProps {
  latitude: number;
  longitude: number;
  zoom: number;
  setPoint?: React.Dispatch<React.SetStateAction<PointProps>>;
  mapClick?: (evnt: PointerEvent) => void;
  newPointer?: {
    lat?: number;
    lng?: number;
  };
}

export interface IMarker {
  name: string;
  image: string;
  lng: number;
  lat: number;
  time: string;
}
