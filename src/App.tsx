import React from 'react';
import { AutoSizer } from 'react-virtualized';

function App() {
  return (
    <AutoSizer>
      {({height, width}) => {
        return (
          <div 
            style={
              {
                height, 
                width,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }
            }
          >
            Olá mundo
            {console.log(height, width)}
          </div>)
      }} 
    </AutoSizer>
  );
}

export default App;
