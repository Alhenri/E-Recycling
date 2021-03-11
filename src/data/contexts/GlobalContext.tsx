import React, { createContext, useState } from 'react';

type TContext = {
  isMobile: boolean
}

interface IGlobalContext {
  context: TContext,
  setContext: React.Dispatch<React.SetStateAction<TContext>>,
}

export const GlobalContext = createContext<IGlobalContext>({} as IGlobalContext);

const GlobalContextProvider: React.FC = ({children}) => {
  const [newContext, setNewContext] = useState<TContext>({isMobile: false})
  return (
    <GlobalContext.Provider value={{context: newContext, setContext: setNewContext}}>
      {children}
    </GlobalContext.Provider>
    )
  }

export default GlobalContextProvider;