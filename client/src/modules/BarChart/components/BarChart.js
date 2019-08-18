import React from 'react';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

import { provideData } from '../../DataFetcher'
import styles from './BarChart.module.scss';

const BarChart = ({ data }) => {
  const chartOptions = {
    title: {
      text: 'Some random numbers aggregated by ranges ¯\\_(ツ)_/¯'
    },
    chart: {
      type: 'column',
      height: '100%',
    },
    plotOptions: {
      series: {
        groupPadding: 0
      }
    },
    xAxis: {
      categories: [
        '-10 -  0',
        '  0 - 10',
        ' 10 - 20',
      ]
    },
    
    yAxis: {
      title: {
        text: 'Random Number'
      },
    },
    series: [{
      name: 'Random Number',
      data: data.reduce((acc, currentValue) => {
        const { value } = currentValue;
        if (value >= -10 && value < 0) {
          acc[0]++;
        } else if (value >= 0 && value < 10) {
          acc[1]++;
        } else if (value >= 10 && value <= 20) {
          acc[2]++;
        }
  
        return acc;
      }, [0, 0, 0])
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

export default provideData(BarChart);
