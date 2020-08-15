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
			<form className="AddNewItem">
				<div className="controls">
					<div onClick={this.handleSubmit}><i className="fa fa-check"></i></div>
				</div>
				<div className="form-content">
					<div className="input">
						<input className="item-input" placeholder="Enter Item" value={this.state.item} onChange={this.handleItem}/>
					</div>
					<div className="input">
						<input className="price-input" placeholder="Enter Price" type="number" step="0.01" min="0" value={this.state.price} onChange={this.handlePrice}/>
					</div>
				</div>
			</form>
				
		);
	}

	handleItem = (event) => {
		this.setState({
			item: event.target.value
		});
	};

	handlePrice = (event) => {
		this.setState({
			price: event.target.value
		});
	};

	handleSubmit = (event) => {
		event.preventDefault();

		this.props.onSubmit({
			item: this.state.item,
			price: this.state.price
		});

		this.setState({
			item: "",
			price: ""
		});
	};

}

export default AddNewItem;
