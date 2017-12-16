import React from 'react';
import ReactDOM from 'react-dom';
import styles from './header.styl';

import Nav from './nav/nav.component';

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <div className={styles.homeLink}>
          <p><a href="">n<span>ick </span>s<span>chnelle</span></a></p>
        </div>
        <Nav />
        <div className={styles.social}></div>
        <div className={styles.hamburger}>hamburger</div>
      </header>
    );
  }
}
