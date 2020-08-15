import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItemToDatabase } from '../actions';
import ShoppingList from "./ShoppingList";
import AddNewItem from "./AddNewItem";

class App extends Component {

	render() {

		return (
			<div className="App">
				<ShoppingList />
                <h3>Add New Item</h3>
				<AddNewItem onSubmit={this.props.addItemToDatabase}/>
			</div>
		);
	}
}

const mapActionsToProps = {
    addItemToDatabase
};

export default connect(null, mapActionsToProps)(App);
