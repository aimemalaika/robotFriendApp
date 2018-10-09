import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'tachyons';
import * as serviceWorker from './serviceWorker';
import App from './containers/App';
ReactDOM.render(<App />,document.getElementById('root'));

serviceWorker.unregister();
