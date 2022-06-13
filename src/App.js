import React, {Component} from 'react';
import CardList from './CardList';
import { robots } from './robots';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import ErrorBoundry from './ErrorBoundry';

/*
const App = () => {
  return (
    <div className='tc'>
	  <h1>RoboFriends</h1>
	  <SearchBox />
      <CardList robots={robots} />
    </div>
  );
}
*/
class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: ''
    }
  }
  
  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value});
  }
  
  render() {
	const filterRobots = this.state.robots.filter(robot =>{
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
    return (
      <div className='tc'>
	    <h1>RoboFriends</h1>
	    <SearchBox changeMethod={this.onSearchChange}/>
        <Scroll>
		  <ErrorBoundry>
            <CardList robots={filterRobots} />
		  </ErrorBoundry>
        </Scroll>
      </div>
    )
  };
  
  componentDidMount() {
    // --- Old: reading the robots info from robots.js
    this.setState({robots: robots}) ;
    //--------------------old -----------------------------

    fetch('https://jsonplaceholder.typicode.com/users')
	  .then(response => {
        return response.json();
      })
	  .then(users => {
        this.setState({ robots: users })
      });
  }
}

export default App;