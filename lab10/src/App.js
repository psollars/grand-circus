import React, { Component } from 'react';
import ShoppingCart from './ShoppingCart';
import AddNewItem from './AddNewItem';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			items: []
		}
	}

	render() {
		return (
			<div className="app">
				<ShoppingCart items={this.state.items} onDelete={(index) => this.removeItem(index)} />
				<AddNewItem onSubmit={this.addToCart} />
			</div>
		);
	}

	addToCart = (item) => {
		this.setState((prevState) => {
			const newItems = prevState.items.slice(0);
			newItems.push(item)
			return { items: newItems };
		});
	};

	removeItem = (index) => {
		console.log(index);
		this.setState(prevState => {
			const newItems = prevState.items.slice(0);
			newItems.splice(index, 1);
			return { items: newItems };
		});
	};

} //end of component

export default App;
