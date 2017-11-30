import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router-dom';
// import styles from './app.styl';

import Header from '../header/header.component';
import Main from '../main/main.component';

class Core extends React.Component {
  render() {
    return (
      <div>
        <Header/>  
        <Route path="/home" render={() => <Main /> } />
      </div>
    );
  }
}
