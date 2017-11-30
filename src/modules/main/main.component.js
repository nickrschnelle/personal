import React from 'react';
import ReactDOM from 'react-dom';
import styles from './main.styl';

export default class Main extends React.Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.main}>
          <img src="https://image.ibb.co/dBXXpb/15965098_10155757455523521_4844976476653048467_n.jpg" 
               alt="15965098_10155757455523521_4844976476653048467_n"
               className={styles.faceImage} />
          <p>Nick Schnelle</p>
          <p>Front-end Dev</p>
        </div>
      </div>
    );
  }
}
