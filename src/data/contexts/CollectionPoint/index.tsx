import React, { createContext, useState } from 'react';

type TContext = {
  position: {
    lng: number;
    lat: number;
  };
};

interface ILocationContext {
  location: TContext;
  setLocation: React.Dispatch<React.SetStateAction<TContext>>;
}

export const LocationContext = createContext<ILocationContext>(
  {} as ILocationContext
);

const LocationContextProvider: React.FC = ({ children }) => {
  const [newContext, setNewContext] = useState<TContext>({
    position: { lat: -3, lng: 40 },
  });
  return (
    <LocationContext.Provider
      value={{ location: newContext, setLocation: setNewContext }}
    >
      {children}
    </LocationContext.Provider>
  );
};

export default LocationContextProvider;
