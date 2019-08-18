import React from 'react';

import BarChart from "../../BarChart";
import LineChart from "../../LineChart";
import AlertTreshold from "../../AlertTreshold";
import DataLogger from '../../Logger'

import styles from './Dashboard.module.scss'

export default () => {
  return (
    <>
      <div className={styles.container}>
        <LineChart/>
        <BarChart/>
        <AlertTreshold/>
      </div>
      <DataLogger />
    </>
  );
}
