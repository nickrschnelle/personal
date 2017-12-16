import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router-dom';
import styles from './core.styl';

import Header from '../header/header.component';
import Nav from '../header/nav/nav.component';
import Main from '../main/main.component';
import About from '../about/about.component';

export default class Core extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isResponsiveNavOpen: false
    };
  }

  toggleHamburger() {
    this.setState({isResponsiveNavOpen: !this.state.isResponsiveNavOpen});
  }

  render() {
    return (
      <div style={{height: '100%'}}>
        <Header toggleHamburger={this.toggleHamburger.bind(this)}/>
        <div className={this.state.isResponsiveNavOpen ? styles.showNav : styles.hideNav}>
          <Nav />
        </div>
        <Route exact path="/" render={() => <Main /> } />
        <Route path="/about" render={() => <About /> } />
        <Route path="/snippets" render={() => <Snippets /> } />
        <Route path="/contact" render={() => <Contact /> } />
      </div>
    );
  }
}
