import React from 'react';

import DataFetcher from '../../DataFetcher';
import Dashboard from '../../Dashboard';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.App}>
      <DataFetcher>
        <Dashboard />
      </DataFetcher>
    </div>
  );
}

export default App;
