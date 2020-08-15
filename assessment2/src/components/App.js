import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from './Form';
//import Controls from './Controls';
import Story from './Story';

class App extends Component {

	render() {
		return (
			<div className="App">
				<Form />
				{/*<Controls />*/}
				<Story />
			</div>
		);
	}
}

export default App;
