import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import styles from './app.styl';

import Core from './modules/core/core.component';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className={styles.wrapper}>
          <Route path="/" render={() => <Core />}/>
        </div>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
