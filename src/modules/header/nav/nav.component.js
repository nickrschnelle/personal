import React from 'react';
import ReactDOM from 'react-dom';
import styles from './nav.styl';

export default class Nav extends React.Component {
  render() {
    return (
      <nav>
        <ul>
          <li><a href="">about</a></li>
          <li><a href="">code snippets</a></li>
          <li><a href="">contact</a></li>
        </ul>
      </nav>
    );
  }
}
