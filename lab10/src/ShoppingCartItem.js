import React, { Component } from 'react';

class ShoppingCartItem extends Component {

	render() {
		return (
			<div className="cart__item">
				<div>
					<div className="cart__remove" onClick={this.props.callback}>X</div> {/*<i className="fa fa-trash-o" aria-hidden="true"></i>*/}
					<div className="cart__itemname">{this.props.item.name}</div>
				</div>
				<div className="cart__price">{this.props.item.price}</div>
		  </div>
		);
  }
}

export default ShoppingCartItem;
