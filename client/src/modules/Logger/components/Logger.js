import React from 'react';

import { provideData } from '../../DataFetcher';
import styles from './Logger.module.scss';

const Logger =  ({ data }) => (
  <ul className={styles.container}>
    {data.map(({ value, timestamp }) => {
      const date = new Date(timestamp);
      return (
        <li key={timestamp}>{`Value: ${value} Time: ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`}</li>
      );
    })}
  </ul>
);

export default provideData(Logger);
