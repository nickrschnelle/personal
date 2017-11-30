import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router-dom';

import Header from '../header/header.component';
import Main from '../main/main.component';
import About from '../about/about.component';

export default class Core extends React.Component {
  render() {
    return (
      <div style={{height: '100%'}}>
        <Header/>  
        <Route exact path="/" render={() => <Main /> } />
        <Route path="/about" render={() => <About /> } />
        <Route path="/snippets" render={() => <Snippets /> } />
        <Route path="/contact" render={() => <Contact /> } />
      </div>
    );
  }
}
