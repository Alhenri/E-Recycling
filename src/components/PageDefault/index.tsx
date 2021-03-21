/* eslint-disable no-lone-blocks */
import React, { useContext } from 'react';
import { AutoSizer } from 'react-virtualized';

import { GlobalContext } from '../../data/contexts/GlobalContext';

const PageDefault: React.FC = ({ children }) => {
  const { context, setContext } = useContext(GlobalContext);

  return (
    <AutoSizer>
      {({ height, width }) => {
        {
          if (
            (width <= 775 && context.isMobile === false) ||
            (width > 775 && context.isMobile === true)
          ) {
            setContext({ ...context, isMobile: !context.isMobile });
          }
          if (width !== context.width || height !== context.height)
            setContext({ ...context, height, width });
        }

        return (
          <div className="App" style={{ height, width }}>
            {children}
          </div>
        );
      }}
    </AutoSizer>
  );
};

export default PageDefault;
