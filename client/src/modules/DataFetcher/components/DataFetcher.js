import React, { Component } from 'react';
import io from 'socket.io-client';

import { DataFetcherContext } from '../contexts/DataFetcherContext';

class DataFetcher extends Component {
  state = {
    data: [],
  };
  
  constructor(props) {
    super(props);
    this.socket = io('http://localhost:3001');
    this.socket.on('data', this.onDataReceived);
  
    this.socket.on('disconnect', this.onDisconnect);
  }
  
  onDataReceived = (data) => {
    console.log(data);
    this.setState((state) => {
      return {
        data: [ ...state.data, data ],
      };
    });
  };
  
  onDisconnect = () => {
    console.warn('========================');
    console.warn('Disconnect occured trying to reconnect...');
    console.warn('========================');
    this.socket.open();
  };
  
  componentWillUnmount() {
    console.info('Closing socket due to Component unmounting');
    this.socket && this.socket.close();
  };
  
  render() {
    const { data } = this.state;
    
    return (
      <DataFetcherContext.Provider value={ data }>
        {this.props.children}
      </DataFetcherContext.Provider>
    );
  }
}


export default DataFetcher;
