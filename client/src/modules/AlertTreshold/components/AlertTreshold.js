import React, { useState } from 'react';
import { Snackbar } from '@material/react-snackbar'
import '@material/react-snackbar/dist/snackbar.css'

import { provideData } from '../../DataFetcher'
import styles from './AlertTreshold.module.scss';

const AlertTreshold = ({ data }) => {
  const [treshold, setTreshold] = useState(0);
  const [numberAboveTreshold, setNumberAboveTreshold] = useState(0);
  const [ showSnack, setShowSnack ] = useState(false);
  
  
  const lastIncomingValue = data.length && data[ data.length - 1 ].value;
  
  if (lastIncomingValue && lastIncomingValue > parseInt(treshold) && lastIncomingValue !== numberAboveTreshold) {
    setNumberAboveTreshold(lastIncomingValue);
    setShowSnack(true);
  }
  
  return (
    <div className={styles.container}>
      <span className={styles.info}>Enter a treshold value, and a snackbar will be shown if received value is greater than treshold</span>
      <input type="number" value={treshold} onChange={(event) => setTreshold(event.target.value)}/>
      {showSnack && (
        <Snackbar
          message={`Received number above treshold: ${numberAboveTreshold}`}
          timeoutMs={4000}
          onClose={() => setShowSnack(false)}
        />
      )}
    </div>
  );
};

export default provideData(AlertTreshold);
