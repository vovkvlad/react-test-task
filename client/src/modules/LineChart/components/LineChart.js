import React from 'react';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

import { provideData } from '../../DataFetcher'
import styles from './LineChart.module.scss';

const LineChart = ({ data }) => {
  const chartOptions = {
    title: {
      text: 'Some random numbers aggregated by category ¯\\_(ツ)_/¯'
    },
    chart: {
      height: '100%',
    },
    plotOptions: {
      series: {
        groupPadding: 0
      }
    },
    xAxis: {
      type: 'datetime',
      title: { text: 'Timestamp' },
    },
    
    yAxis: {
      title: {
        text: 'Random Number'
      },
    },
    series: [{
      name: 'Random Number',
      data: data.map(dataItem => [dataItem.timestamp, dataItem.value])
    }],
  };
  
  return (
    <div className={styles.container}>
      <HighchartsReact
        highcharts={Highcharts}
        options={chartOptions}
      />
    </div>
  );
};

export default provideData(LineChart);
