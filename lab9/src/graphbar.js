import React, { Component } from 'react';

class Graphbar extends Component {

	render() {

		let percentHeight = (this.props.value / this.props.max * 100).toFixed(2) + "%";
			if (this.props.value === 0) {
				percentHeight = "auto";
			}

		return (
			<div className="App__graphbar" style={ {height: percentHeight, backgroundColor: this.props.color} }>
				<div className="Graphbar" >
					<p>{this.props.value}</p>
				</div>
				<div className="GraphbarLabel">
					{this.props.label}
				</div>
			</div>
		);
	}
}

export default Graphbar;
