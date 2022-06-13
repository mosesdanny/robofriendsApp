import logo from './logo.svg';
import './App.css';
import React from 'react';

// Modified the App function into a class that renders the <div> tag
// 1. replaced function App() with a class App that extends React.Component
// 2. modified the body of the function, to a body of a render function.
// 3. Added an import for React

class App extends React.Component {
	render(){
	  return (
		<div className="App">
		  <header className="App-header">
			<img src={logo} className="App-logo" alt="logo" />
			<p>
			  Edit <code>src/App.js</code> and save to reload.
			</p>
			<a
			  className="App-link"
			  href="https://reactjs.org"
			  target="_blank"
			  rel="noopener noreferrer"
			>
			  Learn React
			</a>
		  </header>
		</div>
	  );
	}
}
export default App;
