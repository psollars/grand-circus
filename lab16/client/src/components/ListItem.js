import React, { Component } from "react";
import { connect } from 'react-redux';
import { updateItemInDatabase, removeItemFromDatabase } from '../actions';

class ListItem extends Component {

	constructor(props) {
	    super(props);
        this.state = {
            item: this.props.item.item,
						price: this.props.item.price,
            showForm: false
        };
    }

	render() {

		let roundPrice = Number(this.props.item.price);

		return (
			<div className="ListItemToggle">
				{this.state.showForm ?
					<form className="AddNewItem">
						<div className="controls">
							<div onClick={this.handleFlip}><i className="fa fa-times"></i></div>
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
					</form> :
					<div className="ListItem">
						<div className="controls" onClick={this.handleDelete}><i className="fa fa-times"></i></div>
						<div className="content" onClick={this.handleFlip}>
							<div className="item">{this.props.item.item}</div>
							<div className="price">${roundPrice.toFixed(2)}</div>
						</div>
					</div>
				}
			</div>
		);
	}

	handleDelete = () => {
		this.props.removeItemFromDatabase(this.props.item.id);
	};

  handleFlip = () => {
    this.setState(prevState => ({
        showForm: !prevState.showForm
    })
  )};

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

		this.props.updateItemInDatabase(
		this.props.item.id,
		{
			item: this.state.item,
			price: this.state.price
		});

		this.setState(prevState => ({
        showForm: !prevState.showForm
    }))
	};

}

const mapActionsToProps = {
	updateItemInDatabase,
	removeItemFromDatabase
};

export default connect(null, mapActionsToProps)(ListItem);
