import React from 'react';
import ReactDOM from 'react-dom';
import styles from './app.styl';

class App extends React.Component {
  render() {
    return (
      <div className={styles.red}>
        Test
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
