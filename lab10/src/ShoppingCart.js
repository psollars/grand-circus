import React, { Component } from 'react';
import ShoppingCartItem from "./ShoppingCartItem";

class ShoppingCart extends Component {
	render() {

		let shoppingCartTotal = 0;
		
		const ItemsInCart = this.props.items.map((item, index) => {
			shoppingCartTotal += Number(item.price);
			return <ShoppingCartItem key={index} item={item} callback={() => this.props.onDelete(index)}/>;
		});

		return (
			<div className="app__cart">
				<div className="cart">
					{ItemsInCart}
					<div className="cart__total">
						<div>Total:</div>
						<div>{shoppingCartTotal}</div>
					</div>
				</div>
			</div>
		);
	}

}

export default ShoppingCart;
