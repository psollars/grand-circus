import React, { Component } from 'react';

class AddNewItem extends Component {

	constructor(props) {
		super(props);
		this.state = {
			item: "",
			price: ""
		};
	}

	render() {
		return (
			<form className="AddNewItem" onSubmit={this.handleSubmit.bind(this)}>
				<p>
					<label>Item</label>
					<input value={this.state.item} onChange={this.handleItem.bind(this)}/>
				</p>
				<p>
					<label>Price</label>
					<input type="number" value={this.state.price} onChange={this.handlePrice.bind(this)}/>
				</p>
				<button type="submit">Add New Item</button>
			</form>
		);
	}

	handleItem(event) {
		this.setState({
			item: event.target.value
		});
	}

	handlePrice(event) {
		this.setState({
			price: event.target.value
		});
	}

	handleSubmit(event) {
		event.preventDefault();

		this.props.onSubmit({
			item: this.state.item,
			price: this.state.price
		});

		this.setState({
			item: "",
			price: ""
		});
	}

}

export default AddNewItem;
