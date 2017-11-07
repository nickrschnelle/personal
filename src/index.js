import React from 'react';
import ReactDOM from 'react-dom';
import styles from './app.styl';

import Nav from './modules/nav/nav.component';
import Main from './modules/main/main.component';

class App extends React.Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <Nav />
        <Main />
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
