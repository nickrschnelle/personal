import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

import styles from './nav.styl';

export default class Nav extends React.Component {
  render() {
    return (
      <nav>
        <ul>
          <li><Link to="/about">about</Link></li>
          <li><Link to="/snippets">code snippets</Link></li>
          <li><Link to="/contacts">contact</Link></li>
        </ul>
      </nav>
    );
  }
}
