import { IMarker } from '../interfaces/index';

async function getMarkers(): Promise<IMarker[]> {
  const base_url =
    process.env.REACT_APP_MOCK === 'true'
      ? 'http://localhost:3333'
      : process.env.REACT_APP_BASE_URL;

  const data = await fetch(`${base_url}/get_locations`);
  return data.json();
}

export default getMarkers;
