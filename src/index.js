

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'tachyons';
import App from './App'

/* --- ReactDOM.render() is obsolete in React 18
ReactDOM.render(
  <div>
    <App />
  </div>,
  document.getElementById('root')
);
------------------ old ------------------------ */


ReactDOM.createRoot(
	document.getElementById('root')).render (
		<App />
	);
