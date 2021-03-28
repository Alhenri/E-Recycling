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
  setPoint: React.Dispatch<React.SetStateAction<PointProps>>;
}
