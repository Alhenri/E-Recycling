export interface PointProps {
  name: string;
  lng: number;
  lat: number;
}

export interface MapProps {
  height: number;
  width: number;
  latitude: number;
  longitude: number;
  zoom: number;
  setPoint: React.Dispatch<React.SetStateAction<PointProps>>;
}

export interface IMarker {
  name: string;
  image: string;
  lng: number;
  lat: number;
  time: string;
}
