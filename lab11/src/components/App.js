import React, { Component } from 'react';
import Deck from './Deck';
import cardSet from '../cardSet';

class App extends Component {

	render() {
		return (
			<div className="App">
				<Deck cards={cardSet}/>
			</div>
		);
	}
}

export default App;