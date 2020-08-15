import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItemToDatabase } from '../actions';
import ListItem from "./ListItem";
import AddNewItem from "./AddNewItem";

class App extends Component {

	render() {

		const renderShoppingList = this.props.shoppingList.map((item) => (
			<ListItem key={item.id} item={item}/>
		));

		return (
			<div className="App">
				<div>Shopping List: {renderShoppingList}</div>
				<div><AddNewItem onSubmit={this.props.addItemToDatabase}/></div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		loading: state.loading,
		shoppingList: state.shoppingList
	};
}

const mapActionsToProps = {
    addItemToDatabase
};

export default connect(mapStateToProps, mapActionsToProps)(App);
