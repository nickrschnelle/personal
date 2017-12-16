import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import styles from './header.styl';

import Linkedin from '../../common/svgs/linkedin.svg';
import Github from '../../common/svgs/github.svg';
import Hamburger from '../../common/svgs/hamburger.svg';

import Nav from './nav/nav.component';

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <div className={styles.homeLink}>
          <p><Link to="/">n<span>ick </span>s<span>chnelle</span></Link></p>
        </div>
        <Nav />
        <div className={styles.social}>
          <a href="https://github.com/nickrschnelle/" rel="noopener noreferrer" target="_blank">
            <Github className={styles.icon}/>
          </a>
          <a href="https://www.linkedin.com/in/nick-schnelle-959765a9" rel="noopener noreferrer" target="_blank">
            <Linkedin className={styles.icon}/>
          </a>
        </div>
        <div className={styles.hamburger}>
          <button onClick={this.props.toggleHamburger} className={styles.svgButton}><Hamburger className={styles.icon}/></button>
        </div>
      </header>
    );
  }
}
