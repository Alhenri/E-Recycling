/* eslint-disable no-lone-blocks */
import React, { useContext } from 'react';
import { AutoSizer } from 'react-virtualized';
import Header from '../../components/Header';
import Content from '../../components/Content';
import { GlobalContext } from '../../data/contexts/GlobalContext';


function App() {
  const { context, setContext } = useContext(GlobalContext);
  return (
    <AutoSizer>
      {({height, width}) => {
        { if((width <= 715 && context.isMobile === false) || (width > 715 && context.isMobile === true))
          {setContext({...context, isMobile: !context.isMobile})}}
        return (
          <div className="App" style={{ height, width }}>
              <Header title="teste" />
              <Content width={0.8*width} height={height-100} marginTop={70}></Content>
            </div>
      )}} 
    </AutoSizer>
  );
}

export default App;
