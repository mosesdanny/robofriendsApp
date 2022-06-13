import React, {Component } from 'react';

class ErrorBoundry extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hasError: false
		}
	}

	componentDidCatch(error, info) {
		this.setState({hasError: true})
	}
	
	render() {
		if (this.hasError) {
			return <h1>An error had occured</h1>
		}
		return this.props.children
	}
}

export default ErrorBoundry;
