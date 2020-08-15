import React, { Component } from 'react';

class Buttonbar extends Component {

	render() {
		return (
			<div className="Buttonbar">
				<button onClick={() => this.vote("vanilla")}>Vanilla</button>
				<button onClick={() => this.vote("chocolate")}>Chocolate</button>
				<button onClick={() => this.vote("strawberry")}>Strawberry</button>
				<button onClick={this.neapolitan}>Neapolitan</button>
			</div>
		);
	}

	vote = (flavor) => {
		this.props.onSubmit(flavor);
	};

	neapolitan = () => {
		this.props.onSubmit("vanilla");
		this.props.onSubmit("chocolate");
		this.props.onSubmit("strawberry");
	};

}

export default Buttonbar;
