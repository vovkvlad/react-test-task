import React, { useContext } from 'react';

import { DataFetcherContext } from '../contexts/DataFetcherContext'

export const provideData = WrappedComponent => props => {
  const data = useContext(DataFetcherContext);
  
  return (
    <WrappedComponent {...props} data={data} />
  );
};
