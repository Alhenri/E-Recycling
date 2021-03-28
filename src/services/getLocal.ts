function getLocal(prevLoc: any, setLoc: any) {
  navigator.geolocation.getCurrentPosition((loc) => {
    const { latitude, longitude } = loc.coords;
    setLoc({ ...prevLoc, position: { lat: latitude, lng: longitude } });
  });
}

export default getLocal;
