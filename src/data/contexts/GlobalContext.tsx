import React, { createContext, useState } from 'react';

type TContext = {
  isMobile: boolean,
  width: number,
  height: number,
}

interface IGlobalContext {
  context: TContext,
  setContext: React.Dispatch<React.SetStateAction<TContext>>,
}

export const GlobalContext = createContext<IGlobalContext>({} as IGlobalContext);

const GlobalContextProvider: React.FC = ({children}) => {
  const [newContext, setNewContext] = useState<TContext>({
    isMobile: false,
    height: 0,
    width: 0
  })
  return (
    <GlobalContext.Provider value={{context: newContext, setContext: setNewContext}}>
      {children}
    </GlobalContext.Provider>
    )
  }

export default GlobalContextProvider;