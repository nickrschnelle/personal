import React from 'react';
import ReactDOM from 'react-dom';
import styles from './app.styl';

import Header from './modules/header/header.component';
import Main from './modules/main/main.component';

class App extends React.Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <Header />
        <Main />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
