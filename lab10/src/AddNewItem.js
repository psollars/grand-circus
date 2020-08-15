import React, { Component } from 'react';

class AddNewItem extends Component {

	constructor(props) {
		super(props);
		this.state = {
			name: "",
			price: ""
		};
	}

	render() {
		return (
				<form className="add__form" onSubmit={this.handleSubmit}>
					<label>Item
						<input type="text" className="add__input" value={this.state.name} onChange={this.handleNameEvent} />
					</label>
					<label>Price $
						<input type="number" className="add__input" value={this.state.price} onChange={this.handlePriceEvent} />
					</label>
					<div>
						<button type="submit" className="add__button">Add</button>
					</div>
				</form>
		);
	}

	handleSubmit = (event) => {
		event.preventDefault();
		this.props.onSubmit(this.state);
		this.setState({
            name: "",
						price: ""
        })
	};

	handleNameEvent = (event) => {
		this.setState({
			name: event.target.value
		})
	};

	handlePriceEvent = (event) => {
		this.setState ({
			price: event.target.value
		})
	};
}

export default AddNewItem;
