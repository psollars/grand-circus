import React, { Component } from 'react';
import Graphbar from './Graphbar';
import Buttonbar from './Buttonbar';

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			vanilla: 0,
			chocolate: 0,
			strawberry: 0
		};
	}

	render() {

		const max = Math.max(this.state.vanilla, this.state.chocolate, this.state.strawberry);

		return (
			<div className="App">
				<section className="Graph_Container">
					<Graphbar value={this.state.vanilla} max={max} label="Vanilla" color="#fcfcfc"/>
					<Graphbar value={this.state.chocolate} max={max} label="Chocolate" color="#a0522d"/>
					<Graphbar value={this.state.strawberry} max={max} label="Strawberry" color="#f08080"/>
				</section>
				<Buttonbar onSubmit={(flavor) => this.voteForFlavor(flavor)} />
			</div>
		);

	} //end of render

	voteForFlavor = (flavor) => {
		this.setState(prevState => ( { [flavor]: this.state[flavor] + 1} ) );
	}

} // end of component

export default App;
